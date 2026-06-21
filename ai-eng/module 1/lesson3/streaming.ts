import {GoogleGenAI} from "@google/genai";

const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY})

async function runningStreamWithSystemPrompt() {
    const chatHistory = [
        {role: "user", parts: [{text: "Can you give me recipe for pancake"}]}
    ];

    console.log("Gemini is typing... \n");

    const responseStream = await ai.models.generateContentStream({
        model: "gemini-2.5-flash",
        contents: chatHistory,
        config:{
            systemInstruction:"You are a fitness coach. Keep response under 2 sentence and emphasize high-protein version or whatever food the user ask about."
    
        }
    })
    for await(const chunk of responseStream){
        process.stdout.write(chunk.text ?? "");
    }
}
runningStreamWithSystemPrompt()