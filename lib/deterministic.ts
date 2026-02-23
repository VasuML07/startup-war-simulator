import { GameState } from "./types";

export function deterministicEvent(state: GameState) {
  if (state.month % 3 !== 0) return state;

  state.cash -= 5000;
  state.team_morale -= 5;
  state.risk_index += 3;

  return state;
}