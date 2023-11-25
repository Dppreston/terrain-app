const express = require("express");
const router = express.Router();
const schemas = require("../models/schemas");
const axios = require("axios");

//updated all products

router.get("/products", async (req, res) => {
  const products = schemas.Products;
  // const { q } = req.query;
  // const productData = await products
  //   .find({ title: { $regex: q } })
  //   .limit(5)
  //   .exec();
  // if (q) {
  //   res.send(JSON.stringify(productData));
  //   res.end();
  // } else {
  const productData = await products.find({}).exec();
  if (productData) {
    res.send(JSON.stringify(productData));
    res.end();
  }
});

//sub category call

router.get("/products/:category", async (req, res, next) => {
  const products = schemas.Products;
  const productCat = req.params.category;
  const priceFilter = req.query.price;

  //price sorting

  if (
    productCat == "rods" ||
    productCat == "reels" ||
    productCat == "tackle & storage" ||
    productCat == "lures & bait"
  ) {
    let productData = await products.find({ parentCat: productCat }).exec();
    if (priceFilter === "price-high-low") {
      let sortedData = await products
        .find({ parentCat: productCat })
        .sort({ price: -1 })
        .exec();
      res.send(JSON.stringify(sortedData));
    } else if (priceFilter === "price-low-high") {
      let sortedData = await products
        .find({ parentCat: productCat })
        .sort({ price: 1 })
        .exec();
      res.send(JSON.stringify(sortedData));
    } else {
      res.send(JSON.stringify(productData));
    }
  } else {
    let productData = await products.find({ category: productCat }).exec();
    if (priceFilter === "price-high-low") {
      let sortedData = await products
        .find({ category: productCat })
        .sort({ price: -1 })
        .exec();
      res.send(JSON.stringify(sortedData));
    } else if (priceFilter === "price-low-high") {
      let sortedData = await products
        .find({ category: productCat })
        .sort({ price: 1 })
        .exec();
      res.send(JSON.stringify(sortedData));
    } else {
      res.send(JSON.stringify(productData));
    }
  }

  //price filter
});

//specific product call

router.get("/products/:category/:specific", async (req, res) => {
  const products = schemas.Products;
  const productCat = req.params.category;
  const productSpecific = req.params.specific;

  const productData = await products.find({ _id: productSpecific }).exec();
  if (productData) {
    res.send(JSON.stringify(productData));
    res.end();
  }
});

//account creation

router.post("/users", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const userData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  };

  const newUser = new schemas.Users(userData);
  const saveUser = await newUser.save();

  if (saveUser) {
    res.send("account created");
  }

  res.end;
});

module.exports = router;
