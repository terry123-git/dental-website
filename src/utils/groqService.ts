import { Groq } from "groq-sdk";

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true // Enable browser usage
});

const SYSTEM_PROMPT = `You are a helpful dental first aid assistant. Your role is to provide accurate, concise, and helpful advice for dental emergencies and concerns. Always:
1. Prioritize emergency situations and advise seeking immediate professional care when necessary
2. Provide clear, step-by-step first aid instructions
3. Include important warnings and precautions
4. Use markdown formatting for better readability
5. Keep responses focused on dental health
6. If unsure, always recommend consulting a dentist

Remember: You cannot diagnose conditions or prescribe medications. Your role is to provide first aid guidance and direct users to professional care when needed.`;

export const getDentalAdvice = async (userQuery: string): Promise<string> => {
  try {
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: SYSTEM_PROMPT,
        },
        {
          role: "user",
          content: userQuery,
        },
      ],
      model: "mixtral-8x7b-32768",
      temperature: 0.5,
      max_tokens: 1024,
    });

    return completion.choices[0]?.message?.content || "I apologize, but I'm unable to provide a response at the moment. Please contact your dentist for professional advice.";
  } catch (error) {
    console.error("Error getting dental advice:", error);
    return "I apologize, but I'm experiencing technical difficulties. For any dental concerns, please contact our office directly.";
  }
};