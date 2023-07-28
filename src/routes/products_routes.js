const express = require('express');
const ProductRoutes = express.Router();
const ProductController = require('./../controllers/product_controller')

ProductRoutes.post('/createProduct', ProductController.createProduct);
ProductRoutes.get('/', ProductController.fetchProducts);
ProductRoutes.get('/category/:id', ProductController.fetchProductsByCategory);

module.exports= ProductRoutes;