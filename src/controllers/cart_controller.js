const CartModel = require("../models/cart_model");

const CartController = {

    getCartByUser: async function (req, res) {
        try {
            const user = req.params.user;
            const getCart = await CartModel.findOne({ user: user })
            if (!getCart) {
                return res.json({ success: true, data: [] })
            }
            else {
                return res.json({ success: true, data: getCart.items });
            }
        } catch (error) {
            res.json({ success: false, message: error.message })
        }

    },
    addToCart: async function (req, res) {
        try {
            const { product, user, quantity } = req.body;
            const foundCart = await CartModel.findOne({ user: user });

            // Cart not exist Create New Cart
            if (!foundCart) {
                const newCart = new CartModel({ user: user });
                newCart.items.push({
                    product: product,
                    quantity: quantity
                });
                await newCart.save();
                return res.json({ success: true, message: 'Product added to cart', data: newCart.items })
            }
            // Cart Exist Already
            const existCart = await CartModel.findOneAndUpdate(
                { user: user },
                { $push: { items: { product: product, quantity: quantity } } },
                { new: true }

            );
            res.json({ success: true, message: 'Product added to cart', data: existCart })
        }
        catch (error) {
            res.json({ success: false, message: error.message });
        }
    },

    removeFromCart: async function (req, res) {
        try {
            const { user, product } = req.body;
            const updatedCart = await CartModel.findOneAndUpdate(
                { user: user },
                { $pull: { items: { product: product } } },
                { new: true });

            res.json({ success: true, message: 'Product remove from cart', data: updatedCart })
        } catch (error) {
            res.json({ success: false, message: error.message });
        }
    }
}

module.exports = CartController;