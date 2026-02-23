// lib/prompts.ts

export const initPrompt = `
Generate startup simulation initial state.

Return strict JSON:
{
  cash: number,
  burn_rate: number,
  users: number,
  growth_rate: number,
  product_quality: number,
  team_morale: number,
  investor_trust: number,
  market_position: number,
  risk_index: number,
  traits: string[]
}

Rules:
- Realistic early-stage startup metrics
- Analytical tone
- No storytelling
- No markdown
- No extra text
- JSON only
`;

export function eventPrompt(compressed: string) {
  return `
Startup state:
${compressed}

Generate a realistic strategic business event.

Return strict JSON:
{
  event_title: string,
  event_description: string,
  options: [
    { id: 1, description: string },
    { id: 2, description: string },
    { id: 3, description: string }
  ]
}

Rules:
- Analytical tone
- No storytelling
- No markdown
- JSON only
`;
}

export function evaluationPrompt(
  compressed: string,
  decisionId: number
) {
  return `
Startup state:
${compressed}

Decision selected: ${decisionId}

Return strict JSON:
{
  updated_state: {
    month: number,
    cash: number,
    burn_rate: number,
    users: number,
    growth_rate: number,
    product_quality: number,
    team_morale: number,
    investor_trust: number,
    market_position: number,
    risk_index: number,
    traits: string[],
    achievements: string[]
  },
  analysis: string,
  status: string
}

Rules:
- Apply realistic economic reasoning
- Aggressive decisions increase risk_index
- Conservative decisions reduce risk_index slightly
- No storytelling
- JSON only
`;
}