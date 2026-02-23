import { NextResponse } from "next/server";
import { callGroq } from "../../../lib/groq";
import { evaluationPrompt } from "../../../lib/prompts";
import { safeParse } from "../../../lib/validate";

export async function POST(req: Request) {
  const { compressed, decisionId } = await req.json();

  const response = await callGroq(
    evaluationPrompt(compressed, decisionId)
  );

  return NextResponse.json(safeParse(response));
}