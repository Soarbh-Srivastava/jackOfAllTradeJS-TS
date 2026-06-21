import {GoogleGenAI} from "@google/genai"

const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY});

async function runChat() {
    const chatHistory = [
        {role: "user", parts:[{text:"Hello"}]},
        {role: "model", parts:[{text: "Hi, how can i help you today!"}]}
    ];

    const newUserMessage = "Tell, me a short joke about programming";

    chatHistory.push({
        role: 'user',
        parts: [{text: newUserMessage}]
    });
    
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: chatHistory
    })
    console.log("Model Response :", response.text);
}

runChat();