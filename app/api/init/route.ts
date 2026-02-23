import { NextResponse } from "next/server";
import { callGroq } from "../../../lib/groq";
import { initPrompt } from "../../../lib/prompts";
import { safeParse } from "../../../lib/validate";

export async function GET() {
  const response = await callGroq(initPrompt);
  const parsed = safeParse(response);

  parsed.month = 1;
  parsed.achievements = [];

  return NextResponse.json(parsed);
}