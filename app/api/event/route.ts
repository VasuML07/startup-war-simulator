import { callGroq } from "../../../lib/groq";
import { eventPrompt } from "../../../lib/prompts";
import { safeParse } from "../../../lib/validate";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const { compressed } = await req.json();
  const response = await callGroq(eventPrompt(compressed));
  return NextResponse.json(safeParse(response));
}