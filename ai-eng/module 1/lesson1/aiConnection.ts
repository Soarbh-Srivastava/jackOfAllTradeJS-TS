import { GoogleGenAI} from "@google/genai";

// It automatically look  for GEMINI_API_KEY enviornmet varible 
const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY});

// Establise the connection and req a response
async function startConnection(){
    const res = await ai.models.generateContent({
        model:"gemini-2.5-flash",
        contents: "Hello,  Introduce yourself in one short sentence."
    });
    console.log(res.text)
}


startConnection();