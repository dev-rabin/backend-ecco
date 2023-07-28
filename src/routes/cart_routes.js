const express = require('express');
const CartController = require('../controllers/cart_controller');
const CartRoutes = express.Router();

CartRoutes.post('/', CartController.getCartForUser);

module.exports = CartRoutes;
