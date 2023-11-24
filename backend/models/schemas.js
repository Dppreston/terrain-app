const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  password: { type: String },
  entryDate: { type: Date, default: Date.now },
});

const rodSchema = new Schema({
  _id: { type: String },
  title: { type: String },
  color: { type: String },
  brand: { type: String },
  price: { type: String },
  previewImg: { type: Array },
  category: { type: String },
  desc: { type: String },
});

const reelSchema = new Schema({
  _id: { type: String },
  title: { type: String },
  color: { type: String },
  brand: { type: String },
  price: { type: String },
  previewImg: { type: Array },
  category: { type: String },
  desc: { type: String },
});
const lureSchema = new Schema({
  _id: { type: String },
  title: { type: String },
  color: { type: String },
  brand: { type: String },
  price: { type: String },
  previewImg: { type: Array },
  category: { type: String },
  desc: { type: String },
});
const tackleSchema = new Schema({
  _id: { type: String },
  title: { type: String },
  color: { type: String },
  brand: { type: String },
  price: { type: String },
  previewImg: { type: Array },
  category: { type: String },
  desc: { type: String },
});

const productSchema = new Schema({
  _id: { type: ObjectId },
  title: { type: String },
  color: { type: String },
  brand: { type: String },
  price: { type: String },
  previewImg: { type: Array },
  category: { type: String },
  desc: { type: String },
  parentCat: { type: String },
});

const Users = mongoose.model("Users", userSchema, "users");
const Rods = mongoose.model("Rods", rodSchema, "rods");
const Reels = mongoose.model("Reels", reelSchema, "reels");
const Lures = mongoose.model("Lures", lureSchema, "lures");
const Tackle = mongoose.model("Tackle", tackleSchema, "tackle");
const Products = mongoose.model("Products", productSchema, "products");

const mySchemas = {
  "Users": Users,
  "Rods": Rods,
  "Reels": Reels,
  "Lures": Lures,
  "Tackle": Tackle,
  "Products": Products,
};

module.exports = mySchemas;
