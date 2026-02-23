export function safeParse(text: string) {
  try {
    return JSON.parse(text);
  } catch {
    // Attempt to extract first JSON object in response
    const match = text.match(/\{[\s\S]*\}/);
    if (!match) {
      throw new Error("No JSON object found in LLM response");
    }

    try {
      return JSON.parse(match[0]);
    } catch {
      throw new Error("Invalid JSON returned from LLM");
    }
  }
}