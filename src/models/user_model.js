const mongoose = require('mongoose')
const uuid = require('uuid')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    id: {
        type: String,unique: true
    },
    fullName: {
        type: String,default: ""
    },
    email: {
        type: String,required: true, unique: true
    },
    password: {
        type: String,required: true
    },
    phoneNumber: {
        type: String,required: true,default: ""
    },
    address: {
        type: String,default: ""
    },
    city: {
        type: String,default: ""
    },
    state: {
        type: String,default: ""
    },
    profileProgress: {
        type: String,default: 0
    },
    createdOn: {
        type: Date,
    },
    updatedon: {
        type: Date,
    }
})
userSchema.pre('save', function(next){
    this.id = uuid.v1(),
    this.createdOn = new Date(),
    this.updatedon = new Date()

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(this.password, salt);
    this.password = hash;

    next();
});

userSchema.pre(['update', 'findOneAndUpdate', 'updateOne'], function (next) {
    const update = this.getUpdate();
    delete update._id;
    delete update.id;

    this.updatedon = new Date();

    next();

});

module.exports = mongoose.model('Data', userSchema);