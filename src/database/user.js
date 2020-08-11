const mongoose = require("mongoose");
mongoose
    .connect("mongodb://localhost:27017/dairyapp", { useNewUrlParser: true })
    .then(() => {
        console.log(" The connection is good ");
    })
    .catch((err) => {
        console.log(" Err when conected To DataBase ", err);
    });
    let userSchema = mongoose.Schema({
        username: { type: String, unique: true, required: true },
        email: { type: String, required: true },
        mobile:{type:String,required:true},
        password: { type: String, required: true },
      });
      let UserModel = mongoose.model("User", userSchema);
      
      module.exports.UserModel = UserModel;