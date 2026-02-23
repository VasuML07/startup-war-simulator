import { GameState } from "./types";

export function compressState(state: GameState): string {
  return `M${state.month} | C:${state.cash} | B:${state.burn_rate} | U:${state.users} | G:${state.growth_rate} | PQ:${state.product_quality} | TM:${state.team_morale} | IT:${state.investor_trust} | MP:${state.market_position} | R:${state.risk_index}`;
}