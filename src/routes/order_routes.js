const express = require('express');
const OrderController = require('../controllers/order_controller');
const OrderRoutes = express.Router();

OrderRoutes.get('/:userId', OrderController.getOrdersByUser);
OrderRoutes.post('/', OrderController.createOrder);
OrderRoutes.patch('/updateOrder' , OrderController.updateOrderStatus)

module.exports = OrderRoutes;