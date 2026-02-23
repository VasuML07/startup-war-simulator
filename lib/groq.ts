export async function callGroq(
  prompt: string,
  attempt: number = 1
): Promise<string> {
  if (!process.env.GROQ_API_KEY) {
    throw new Error("Missing GROQ_API_KEY");
  }

  const res = await fetch(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: process.env.GROQ_MODEL || "llama-3.1-8b-instant",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.2,
        max_tokens: 350
      })
    }
  );

  // 🔁 Retry on Rate Limit
  if (res.status === 429 && attempt <= 3) {
    const delay = 1000 * attempt; // exponential-ish backoff
    await new Promise(r => setTimeout(r, delay));
    return callGroq(prompt, attempt + 1);
  }

  const text = await res.text();

  if (!res.ok) {
    console.error("Groq error response:", text);
    throw new Error(`Groq API error: ${res.status}`);
  }

  let data;
  try {
    data = JSON.parse(text);
  } catch {
    throw new Error("Invalid JSON returned from Groq API");
  }

  if (
    !data.choices ||
    !data.choices[0] ||
    !data.choices[0].message
  ) {
    throw new Error("Unexpected Groq response structure");
  }

  return data.choices[0].message.content;
}