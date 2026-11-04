
require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.json({
    message: "Product API is running",
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Product API",
  });
});

// Product API
app.use("/api/products", productRoutes);

// Port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
