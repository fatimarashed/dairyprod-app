const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const db = require("./../src/database/products");
let ProductModel = db.ProductModel;
let CartModel = require("../src/database/cart");
const cors = require("cors");

const reg = require("./../src/database/user");
let UserModel = reg.UserModel;

let app = express();
app.use(cors());

app.use(express.json());
//product post (userproducts)

app.post("/product", (req, res) => {
  const { name, price } = req.body;

  let productDocument = new ProductModel({ name, price });
  productDocument.save((err) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(201).send({ name: name, price: price });
    }
  });
});

app.get("/products", (req, res) => {
  ProductModel.find({})
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

//registaration user post

app.post("/users", (req, res) => {
  const { username, email, mobile, password } = req.body;

  let userDocument = new UserModel({ username, email, mobile, password });
  userDocument.save((err) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(201).send({
        username: username,
        email: email,
        mobile: mobile,
        password: password,
      });
    }
  });
});
//get for log in

app.get("/login/:username/:password", (req, res) => {
  const { username, password } = req.params;
  var Username = req.body.username;
  var Password = req.body.password;

  UserModel.find({ username, password })
    .then((result) => {
      res.send(result);
      // if (result.length > 0) {
      //   res.send(result);
      // } else {
      //   res.send('false');
      // }
      console.log("user infoooooooooooooooooooooooooooooooooooooooo", result);
    })
    .catch((err) => {
      res.send(err);
    });
});
//cart

app.post("/cart", (req, res) => {
  console.log(req.body);
  const { product_id, user_id, quantity } = req.body;

  let cartDocument = new CartModel({ product_id, user_id, quantity });
  cartDocument.save((err) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res
        .status(201)
        .send({ product_id: product_id, user_id: user_id, quantity: quantity }); // TODO: CHANGe 1 to quantity
    }
  });
});
//cart with quantity

app.post("/carts", (req, res) => {
  CartModel.find({ user_id: req.body.user_id })
    .then(async (result) => {
      // console.log('cart items from serverrrrrrrrrrr',result);
      var items = result.map(async (element) => {
        var product = await ProductModel.find({ _id: element.product_id });
        console.log(product);
        return product;
      });
      var itemsPromises = await Promise.all(items);
      var allProducts = [];
      itemsPromises.forEach((e, i) => {
        allProducts.push({ name: e[0].name, price: e[0].price });
        console.log("item :", { name: e[0].name, price: e[0].price });
      });
      console.log(
        "allllllllllllllllllll products after getting it from product table",
        allProducts
      );
      for (var i = 0; i < allProducts.length; i++) {
        console.log("myObjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj");
        console.log(allProducts[i]);

        allProducts[i]["quantity"] = result[i]["quantity"];
        console.log(
          "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
          allProducts[i].quantity
        );
        console.log(allProducts[i]);
        console.log(Object.keys(allProducts[i]));
      }
      console.log(Object.keys(allProducts[0]));
      console.log(
        "allProductsssssssssssssssssssssssssssssssss after",
        allProducts[0]
      );
      res.send(allProducts);
    })
    .catch((err) => {
      res.send(err);
    });
});
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "..", "build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
  });
}
//default port and lisetning
var port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`app listening to port ${port}`);
});
