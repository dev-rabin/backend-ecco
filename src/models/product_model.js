const {Schema, model, Types, SchemaTypes} = require('mongoose');

const productSchema = new Schema({
    title: {type : String , required: true},
    category : {type : Schema.Types.ObjectId, ref : 'Category', required: true},
    price: {type: Number, required: true},
    description : {type: String, default: ""},
    images: {type: Array , default: []},
    createdon : {type: Date},
    updatedOn: {type: Date}
})

productSchema.pre('save', function (next) {
    this.createdon = new Date();
    this.updatedOn = new Date();

    next();
})

productSchema.pre(['update','findOneAndUpdate', 'updateOne'], function (next) {
    const update = this.getUpdate();
    delete update._id;

    this.updatedOn = new Date();

    next();
})

const ProductModel = model('Product', productSchema);
module.exports = ProductModel