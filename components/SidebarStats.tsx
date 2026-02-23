import StatBar from "./StatBar";

export default function SidebarStats({ state }: any) {
  return (
    <div className="bg-panel p-4 space-y-4">
      <div>
        Team Morale
        <StatBar value={state.team_morale} />
      </div>
      <div>
        Investor Trust
        <StatBar value={state.investor_trust} />
      </div>
      <div>
        Market Position
        <StatBar value={state.market_position} />
      </div>
      <div>
        Product Quality
        <StatBar value={state.product_quality} />
      </div>
    </div>
  );
}