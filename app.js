const dotenv = require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const router = require("./routes/routers");
const connectDB = require("./configs/db");
const app = express();
const port = process.env.PORT || 6000;

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).send("Server is running smoothly!");
});

app.get("/hello", (req, res) => {
  console.log("Hello world");
  res.status(200).json({ message: "Hello world" });
});
app.use("/school", router);

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running at Port ${port}`);
  });
});
