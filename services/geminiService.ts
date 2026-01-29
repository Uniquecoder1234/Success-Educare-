
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getAIResponse = async (userMessage: string) => {
  if (!API_KEY) {
    throw new Error("API Key not found. Please ensure it is configured.");
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: `You are the "Success Educare Premium Consultant". 
        Your tone is professional, sophisticated, encouraging, and luxurious. 
        You provide high-level educational advice, career strategy, and information about Success Educare.
        Success Educare is a premium educational platform focusing on Leadership, Finance, AI, and Innovation.
        Keep responses concise, elegant, and insightful. Avoid slang or overly casual language.`,
        temperature: 0.8,
        topP: 0.95,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, our premium intelligence system is currently undergoing refinement. Please try again shortly.";
  }
};
