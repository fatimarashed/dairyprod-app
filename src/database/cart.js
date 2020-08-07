const mongoose = require("mongoose");

mongoose
.connect("mongodb://localhost:27017/dairyapp", { useNewUrlParser: true })
.then(()=>{
    console.log("the connection is good");
})
.catch((err)=>{
    console.log("error when connected to database",err)
});
let cartSchema = mongoose.Schema({
    

})
let CartrModel = mongoose.model("Cart", ccartSchema);
      
      module.exports.CartModel = CartsModel;