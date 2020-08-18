const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost:27017/dairyapp", { useNewUrlParser: true })
    .then(() => {
        console.log(" The connecting is good ");
    })
    .catch((err) => {
        console.log(" Err when conecting To DataBase ", err);
    });
    let cartSchema = mongoose.Schema({
        product_id: { type: String },        
        user_id:{type: String},
        quantity: {type:Number},
      });

      let CartModel = mongoose.model("Cart", cartSchema);
      module.exports = CartModel ;
    //   let cartDoc = new CartModel({name :"cheese",price:"2$",count:"2",total:"1"});

    //   cartDoc.save((err)=>{
    //      if(err){
    //          console.log("error in saving data",err);
    //     }else{
    //         console.log("product saved")
    //      }
    //   });
     //let productDoc = new ProductModel({name :"cheese",price:"2$"});

    //   productDoc.save((err)=>{
    //       if(err){
    //           console.log("error in saving data",err);
    //       }else{
    //           console.log("product saved")
    //       }
    //   });
      