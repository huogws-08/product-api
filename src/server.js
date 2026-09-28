require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

const app = express();

// Cho phép API đọc dữ liệu JSON
app.use(express.json());

// Kết nối MongoDB
connectDB();

// Route kiểm tra API
app.get("/", (req, res) => {
  res.json({
    message: "Product API is running",
  });
});

// Product API
app.use("/api/products", productRoutes);

// Port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});