const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://dairyapp:fa123@cluster0.1sfpd.mongodb.net/dairyapp?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log(" The connecting is good ");
  })
  .catch((err) => {
    console.log(" Err when conecting To DataBase ", err);
  });
let productsSchema = mongoose.Schema({
  name: { type: String },

  price: { type: Number },
});

let ProductModel = mongoose.model("Products", productsSchema);
//let productDoc = new ProductModel({name :"cheese",price:"2$"});

//   productDoc.save((err)=>{
//       if(err){
//           console.log("error in saving data",err);
//       }else{
//           console.log("product saved")
//       }
//   });
module.exports.ProductModel = ProductModel;
