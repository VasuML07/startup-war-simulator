export default function HUD({ state }: any) {
  return (
    <div className="flex justify-between p-4 bg-panel border-b border-accent">
      <div>Month {state.month}</div>
      <div>Cash ${state.cash}</div>
      <div>Burn ${state.burn_rate}</div>
      <div>Risk {state.risk_index}</div>
      <div>Survival {Math.min(state.month * 8, 100)}%</div>
    </div>
  );
}