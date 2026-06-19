/* Lesson 1
Day 1 — AI Foundations + OpenAI APIs
Movvrning (4-5 hrs)
LLM Basics
Tokens
Context Window
Temperature
Top P
System Prompts
Structured Outputs
Function Calling
Afternoon (4-5 hrs)
OpenAI API
Responses API
Streaming
JSON Mode
Tool Calling
Evening (3-4 hrs)
*/

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