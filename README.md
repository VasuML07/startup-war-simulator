🚀 Startup War Simulator

A turn-based, strategy-driven startup management simulator powered by Groq LLM.

Built with a hybrid deterministic engine + large language model reasoning to simulate real startup economics, risk exposure, and survival dynamics over a 12-month lifecycle.

🔥 Live Concept

The player runs a startup for 12 months and must survive by making strategic decisions under:

Cash constraints

Burn rate pressure

Investor trust volatility

Team morale decay

Market competition

Product quality tradeoffs

Lose Conditions

Cash ≤ 0

Team morale ≤ 20

Investor trust ≤ 15

Win Condition

Survive 12 months

🧠 Architecture Overview

This is not a simple “LLM chatbot wrapper.”

It uses a Hybrid Game Engine Design:

Deterministic Engine (Local)

Handles predictable economic mechanics:

Monthly burn

Risk index scaling

Deterministic internal events (every 3 months)

Failure checks

Achievement logic

LLM Reasoning Layer (Groq)

Used only for:

Strategic event generation

Major economic decision evaluation

Complex macroeconomic reasoning

Compressed State Format (Token Optimized)

Instead of sending full JSON to the LLM:

M3 | C:75000 | B:14000 | U:2300 | G:8 | M:62 | T:70 | R:48

This reduces token usage and improves response speed.
## ⚙️ Tech Stack

### Frontend

![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs)
![React](https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38B2AC?style=for-the-badge&logo=tailwind-css)

---

### Backend

![Node.js](https://img.shields.io/badge/Node.js-18-339933?style=for-the-badge&logo=node.js)
![Next.js API](https://img.shields.io/badge/Next.js-API_Routes-000000?style=for-the-badge&logo=nextdotjs)
![Groq](https://img.shields.io/badge/Groq-LLM-FF6B00?style=for-the-badge)

---

### Deployment

![Vercel](https://img.shields.io/badge/Vercel-Serverless-000000?style=for-the-badge&logo=vercel)
![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)

🎮 Core Game Mechanics
State Object
{
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
  traits: string[]
}
Hidden Traits System

Each startup receives randomized hidden strategic traits at initialization which influence long-term outcomes.

Risk Index

Aggressive decisions increase systemic risk which compounds over time.

Deterministic Internal Events

Every 3 months:

Market correction

Operational stress

Competitive shift

No API call required.

🧪 Production Considerations

This system includes:

Rate limit backoff handling

Safe JSON parsing from LLM responses

Token usage optimization

Defensive API validation

Controlled temperature for analytical outputs

LLMs are non-deterministic. The engine is built to guard against malformed outputs.

📊 Why This Project Matters

This is not a toy UI wrapper around an LLM.

It demonstrates:

Hybrid AI system design

Token efficiency optimization

Serverless backend architecture

Game loop lifecycle management

State compression strategy

Production-level error handling

🧩 Future Improvements

Persistent score leaderboard

Multi-player competitive mode

Difficulty scaling

Real macroeconomic data injection

Investor sentiment modeling

Offline deterministic-only mode

👨‍💻 Author

Vasu Maragana
ML Engineering & Applied AI

Portfolio: https://vasu-margana-portfolio.vercel.app/

LinkedIn: https://www.linkedin.com/in/vasu-margana-492c5031b/

GitHub: https://github.com/VasuML07
