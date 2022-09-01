process.on("uncaughtException", (err) => {
  // console.log(err.name, err.message);
  // console.log('shuting down the server');
  process.exit(1);
});
const app = require("./app");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);
// const DB = connection string of mongoDB
mongoose.connect(DB).then(() => {
  console.log("DB connection successful");
});
const port = process.env.PORT || 6000;

const server = app.listen(port, () => {
  console.log(`Listen at port number ${port}`);
});
process.on("unhandledRejection", (err) => {
  //console.log(err.message, err.name);
  server.close(() => {
    process.exit(1);
  });
});
