const express = require("express");
const products = require("./assets/fakeData");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/api/v1/products", (req, res) => {
  res.send(products);
});

app.get("/api/v1/products/:id", (req, res) => {
  const { id } = req.params;
  const product = products.find((p) => p.id == id);
  res.send(product);
});

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(8000, () => console.log("listening at PORT: ", 8000));
