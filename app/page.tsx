"use client";

import React, { useEffect, useState } from "react";
import HUD from "../components/HUD";
import EventCard from "../components/EventCard";
import SidebarStats from "../components/SidebarStats";
import ActionButtons from "../components/ActionButtons";
import GameOverOverlay from "../components/GameOverOverlay";

import { compressState } from "../lib/state";
import { applyMonthlyChanges } from "../lib/ruleEngine";
import { deterministicEvent } from "../lib/deterministic";

export default function Home() {
  const [state, setState] = useState<any>(null);
  const [event, setEvent] = useState<any>(null);
  const [nextEvent, setNextEvent] = useState<any>(null);
  const [status, setStatus] = useState<string | null>(null);

  // ==============================
  // Initialize / Restart Game
  // ==============================
  async function initializeGame() {
    setStatus(null);
    setEvent(null);
    setNextEvent(null);
    setState(null);

    const res = await fetch("/api/init");
    const data = await res.json();

    setState(data);
  }

  useEffect(() => {
    initializeGame();
  }, []);

  // ==============================
  // Fetch Event on Month Change
  // ==============================
  useEffect(() => {
    if (!state) return;

    const compressed = compressState(state);

    async function fetchEvent() {
      const res = await fetch("/api/event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ compressed })
      });

      const data = await res.json();
      setEvent(data);

      // Prefetch next event for smoother UX
      const nextRes = await fetch("/api/event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ compressed })
      });

      const nextData = await nextRes.json();
      setNextEvent(nextData);
    }

    fetchEvent();
  }, [state?.month]);

  // ==============================
  // Handle Player Decision
  // ==============================
  async function handleDecision(id: number) {
    if (!state) return;

    const compressed = compressState(state);

    const res = await fetch("/api/evaluate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ compressed, decisionId: id })
    });

    const data = await res.json();

    let newState = data.updated_state;

    // Apply local rule engine
    newState = applyMonthlyChanges(newState);
    newState = deterministicEvent(newState);

    // Failure Conditions
    if (
      newState.cash <= 0 ||
      newState.team_morale <= 20 ||
      newState.investor_trust <= 15
    ) {
      setStatus("Startup collapsed due to structural instability.");
    }

    // Win Condition
    if (newState.month >= 12) {
      setStatus("Survived 12 months. Strategic resilience achieved.");
    }

    setState(newState);
  }

  if (!state) return null;

  return (
    <div>
      <HUD state={state} />

      <div className="grid grid-cols-4 gap-4 p-6">
        <div className="col-span-3">
          <EventCard event={event} />
          <div className="mt-6">
            <ActionButtons
              options={event?.options}
              onSelect={handleDecision}
            />
          </div>
        </div>

        <SidebarStats state={state} />
      </div>

      {status && (
        <GameOverOverlay
          status={status}
          onRestart={initializeGame}
        />
      )}
    </div>
  );
}