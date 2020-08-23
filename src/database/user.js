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
    console.log(" The connection is good ");
  })
  .catch((err) => {
    console.log(" Err when conected To DataBase ", err);
  });
let userSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: [true, "please enter a name"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "please enter an email"],
  },
  mobile: { type: String, required: true },
  password: { type: String, required: true },
});
let UserModel = mongoose.model("User", userSchema);

module.exports.UserModel = UserModel;
