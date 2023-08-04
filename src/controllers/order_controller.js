const OrderModel = require("../models/order_model");

const OrderController = {
    createOrder: async function (req, res) {
        const { user, items } = req.body;
        const newOrder = new OrderModel(
            {
                user: user,
                items: items
            }
        );
        await newOrder.save();

        res.json({ success: true, data: newOrder, message: 'Order created!' })
    },

    getOrdersByUser: async function (req, res) {
        try {
            const userId = req.params.userId;
            const getOrders = await OrderModel.find({
                "user.id": userId
            });
            res.json({ success: true, message: "Orders Found Succesfully!", data: getOrders, })
        } catch (error) {
            res.json({ success: false, message: error.message })
        }

    },

    updateOrderStatus: async function (req, res) {
        try {
            const { orderId, status } = req.body;
            const updatedOrder = await OrderModel.findOneAndUpdate(
                { "_id": orderId },
                { status: status },
                { new: true }
            );
            res.json({ success: true, message: "Status Updated", data: updatedOrder })
        } catch (error) {
            res.json({ success: false, message: error.message })
        }
    }
}

module.exports = OrderController;