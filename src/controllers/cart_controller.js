const CartModel = require("../models/cart_model");

const CartController = {
     addToCart : async (req, res) => {

        const {products, quantity , user} = req.body ;
        const getCart = await CartModel.findOne({user : user});
        if(!getCart){
            const newCart = new CartModel({user:user});
            newCart.items.push({
                products : products,
                quantity: quantity,
            })
            await newCart.save();
            return res.json({success: true , data: newCart.items , message:'Product added to cart!'})
        }
     }
    }

module.exports = CartController;