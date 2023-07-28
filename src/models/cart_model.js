const {Schema, model } = require('mongoose');

const cartItemSchema = new Schema ({
    products: {type : Schema.Types.ObjectId, ref : 'Products',},
    quantity: {type: Number , default : 1}
})

const CartSchema = new Schema({
    user: {type : Schema.Types.ObjectId, ref : 'User', required : true},
    items:{type: [cartItemSchema], default: []},
    createdOn : {type: Date},
    updatedOn: {type: Date}
})

CartSchema.pre('save', function (next) {

    this.updateOne = new Date();
    this.createdOn = new Date();

    next();
})

CartSchema.pre(['updateOne', 'findOneAndUpdate' , 'update'] , function(next){
    const update = this.getUpdate();
    delete update._id;

    this.updatedOn = new Date();

    next();
})

const CartModel = model('Cart', cartItemSchema);

module.exports = CartModel;