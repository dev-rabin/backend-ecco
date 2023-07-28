const { json } = require('express');
const ProductModel = require('./../models/product_model')
const ProductController = {
    createProduct: async (req, res) => {
        try {
            const productData = req.body;
            const newProduct = new ProductModel(productData);
            await newProduct.save();
            res.json({ success: true, data: newProduct, message: "Product Created Successfully!" });
        } catch (error) {
            res.json({ success: false, message: error.message });
        }
    },

    fetchProducts: async (req, res) => {
        try {
            const products = await ProductModel.find();
            res.json({ success: true, data: products })
        } catch (error) {
            res, json({ success: false, message: error.message })
        }
    },

    fetchProductsByCategory: async (req, res) => {
        try {
            const categoryId = req.params.id;
            const products = await ProductModel.find({ category: categoryId });
            res.json({ success: true, data: products })
        } catch (error) {
            res.json({ success: false, message: error.message });
        }
    }
}

module.exports = ProductController;