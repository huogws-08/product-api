const Product = require("../models/product");

// CREATE - Thêm sản phẩm
const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({
      message: "Create product failed",
      error: error.message,
    });
  }
};

// READ ALL - Lấy tất cả sản phẩm
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: "Get products failed",
      error: error.message,
    });
  }
};

// READ ONE - Lấy sản phẩm theo pid
const getProductByPid = async (req, res) => {
  try {
    const product = await Product.findOne({
      pid: req.params.pid,
    });

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: "Get product failed",
      error: error.message,
    });
  }
};

// UPDATE - Cập nhật sản phẩm
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate(
      { pid: req.params.pid },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({
      message: "Update product failed",
      error: error.message,
    });
  }
};

// DELETE - Xóa sản phẩm
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findOneAndDelete({
      pid: req.params.pid,
    });

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json({
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Delete product failed",
      error: error.message,
    });
  }
};

module.exports = {
  createProduct,
  getProducts,
  getProductByPid,
  updateProduct,
  deleteProduct,
};