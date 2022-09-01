const { application } = require("express");
const express = require("express");
const morgan = require("morgan");
const milkOrder = require("./route/orderRoute");
const app = express();
//trace MIddleware
app.use(morgan("dev"));
//body parser req.body middle ware
app.use(express.json());

//route handler middleware
app.use("/api/v1/order", milkOrder);

module.exports = app;
