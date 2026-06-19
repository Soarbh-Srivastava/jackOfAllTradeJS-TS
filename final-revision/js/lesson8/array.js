import express from 'express';

const app = express();

// turn the data in json
app.use(express.json());

app.get('/api/products', (req, res) => {
  const products = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Mouse', price: 29 }
  ];
  
  // 📦 Automatically converts the array to JSON and sends it!
  res.json(products); 
});

const product = [];

app.post('/api/product',(req,res)=>{
    const newProduct = req.body;
    product.push(newProduct);
    
    res.status(201).json(newProduct);
});

app.get('/api/product/:id',(req,res)=>{
    const productId = req.params.id;

    res.send(`You are looking for product with id: ${productId}`)
})

app.listen(3000,()=>console.log('server is running'));