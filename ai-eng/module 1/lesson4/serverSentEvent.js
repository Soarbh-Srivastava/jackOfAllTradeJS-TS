import express, { text } from "express";
import {GoogleGenAI} from  "@google/genai"
import cors from "cors";

const app = express();
const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY});
app.use(
  cors({
    origin: "http://localhost:5500"
  })
);
app.get("/api/chat/stream",async (req,res)=>{
    res.setHeader('Content-type', 'text/event-stream');
    res.setHeader('Cache-content', 'no-cache');
    res.setHeader('Connection','keep-alive')

    try{
        const responseStream = await ai.models.generateContentStream({
            model:"gemini-2.5-flash",
            contents: [{role:'user',parts:[{text:'write a poem on beautiful and harsh nature of fog and presonfy it as women in hindi using alankars adn keep it 4 line'}]}]
        })

        for await(const chunk of  responseStream){
            const token = chunk.text;
            res.write(`data: ${JSON.stringify({text: token})}\n\n`)
        }
    }catch(error){
        console.log(error);
    }finally{
        res.end();
    }
})

app.listen(9000, console.log('server listening on port 3000'))