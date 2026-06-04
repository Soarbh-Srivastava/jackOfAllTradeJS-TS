import express from express;

const app = express();

app.get("/welcome",(request,response)=>{
    response.send('hello')
})

app.listen(3000,()=> console.log('server running...'))