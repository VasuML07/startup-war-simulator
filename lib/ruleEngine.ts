import { GameState } from "./types";

export function applyMonthlyChanges(state: GameState): GameState {
  state.cash -= state.burn_rate;
  state.users += Math.floor(state.users * (state.growth_rate / 100));
  state.month += 1;

  if (state.risk_index > 70) {
    state.investor_trust -= 2;
  }

  return state;
}