const express = require ("express");
const db = require("./../src/database/products");
const cors =require("cors");

let ProductModel = db.ProductModel;

let app =express();
app.use(cors());

app.use(express.json());

app.post("/product",(req,res)=>{
    const {name,price} = req.body;

   let productDocument = new ProductModel({name,price});
   productDocument.save((err)=>{
    if(err) {
        console.log(err);
        res.status(500).send(err);
    
    } else{
        res.status(201).send({name: name,price: price});
    }    
   });
    
});
 app.get("/products",(req,res)=>{
     ProductModel.find({})
    .then((result) =>{
     res.send(result);
 })
.catch((err) => {
    res.send(err);
 });
 });


var port = 4000;
app.listen(port,()=>{
    console.log(`app listening to port ${port}`);
});