require("dotenv").config();
const express = require("express");
const server = express();
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const productRouter = require("./routes/product");
// const userRouter = require("./routes/user");

// connect to mongo

mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "E-commerce_demo",
  })
  .then(() => console.log("Database is connected"))
  .catch((e) => console.log(e));

//Middle ware
server.use(cors());
server.use(express.json());
server.use(express.static(process.env.PUBLIC_DIR));
server.use("/products", productRouter.router);
// server.use("/users", userRouter.router);

server.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

server.listen(4000, () => console.log("Server is listing from Port no. 4000"));
