import express from "express";
const router  = express.Router();

router.get('/', (req,res)=>{
    res.send('list of all the products');
})

router.post('/:id',(req,res)=>{
    res.send(`Details for product ${req.param.id}`)

})
 
router.get('/api/products',(req,res)=>{
    const maxPrice = req.query.maxPrice;
    const  sortBy = req.query.sortBy;
})
module.express = router;