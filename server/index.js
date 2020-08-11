const express = require ("express");

const db = require("./../src/database/products");
let ProductModel = db.ProductModel;

const cors =require("cors");


const reg = require("./../src/database/user");
let UserModel = reg.UserModel;


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
     console.log(result);
 })
.catch((err) => {
    res.send(err);
 });
 });
 

//registaration user post

app.post("/users",(req,res)=>{

    const { username,
    email,
    mobile,
    password} = req.body;

   let userDocument = new UserModel({username,email,mobile,password});
 userDocument.save((err)=>{
    if(err) {
        console.log(err);
        res.status(500).send(err);
    
    } else{
        res.status(201).send({username:username,
            email:email,
            mobile:mobile,
            password:password});
    }    
   });
    
});
//get for log in 

app.get('/users/:username/:password', (req, res) => {
    const { username, password } = req.params;
  
    var Username = req.body.username;
    var Password = req.body.password;
 UserModel.find({ username, password })
      .then(result => {
        if (result.length > 0) {
          res.send(true);
        } else {
          res.send(false);
        }
        console.log(result);
      })
      .catch(err => {
        res.send(err);
      });
  });
  
//default port and lisetning
var port = 4000;
app.listen(port,()=>{
    console.log(`app listening to port ${port}`);
});