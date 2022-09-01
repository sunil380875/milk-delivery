const mongoose = require("mongoose");
const validator = require("validator");

const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "A email must Required"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  phone: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
  },
});
const Milkorder = mongoose.model("Milkorder", orderSchema);

module.exports = Milkorder;
