import express from "express";
import productsRoutes  from './router'
const app = express();

app.use('/api/products',productsRoutes)

app.use(3000);