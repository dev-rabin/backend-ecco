const {Schema, model} = require('mongoose');

const categorySchema = new Schema ({
    title: { type: String , required : [true, 'Title is Required']},
    description : {type: String , default: ""},
    createdOn : {type: Date},
    updatedOn: {type: Date},
})

categorySchema.pre('save', function(next) {
    this.createdOn = new Date();
    this.updatedOn = new Date();

    next();
});

categorySchema.pre(['update','findOneAndUpdate','updateOne' ], function(next){
    const update = this.getUpdate();
    delete update._id;

    next();
})

const CategoryModel = model('Category', categorySchema);
module.exports = CategoryModel;