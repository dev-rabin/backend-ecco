const express = require('express');
const CartController = require('../controllers/cart_controller');
const CartRoutes = express.Router();

CartRoutes.get('/:user', CartController.getCartByUser);
CartRoutes.post('/', CartController.addToCart);
CartRoutes.delete ('/', CartController.removeFromCart);

module.exports = CartRoutes;
