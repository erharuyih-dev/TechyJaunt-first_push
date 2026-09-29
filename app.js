const dotenv = require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const router = require("./routes/routers");
const connectDB = require("./configs/db");
const app = express();
const port = process.env.PORT || 6000;

app.use(express.json());
app.use(morgan("dev"));

app.get("/hello", async () => {
  console.log("Hello world");
});
app.use("/school", router);

app.listen(port, () => {
  connectDB();
  console.log(`Server is running at Port ${port}`);
});
