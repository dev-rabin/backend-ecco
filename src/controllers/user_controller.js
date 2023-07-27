const { json } = require('express');
const userModel = require('./../models/user_model')
const bcrypt = require('bcrypt');


const UserController = {
    createAccount: async (req, res) => {

        try {
            const userData = req.body;
            const newUser = new userModel(userData);
            await newUser.save();

            return res.json({ success: true, data: newUser, message: 'User Created Sucessfully!' });

        } catch (error) {
            return res.json({ success: false, message: error.message });
        }
    },

    // fetchAllData : async (req, res) =>{
    //    try {
    //     const data = await userModel.find();
    //     res.json(data);

    //    } catch (error) {
    //     res.status(200).json({message: "Data is Not Fetching"})
    //    }
    // }

    signIn: async (req, res) => {
        try {
            const { email, password } = req.body;

            const userMatched = await userModel.findOne({ email: email });
            if (!userMatched) {
                res.json({ success: false, message: "User not found!" })
            }


            const passwordMatched = bcrypt.compareSync(password, userMatched.password);
            if (!passwordMatched) {
                res.json({ success: false, message: 'Incorrect Password' })
            }

            return res.json({ success: true, message: 'Signin Successfully!' })
        } catch (error) {
            res.json({success: false,data: userMatched, message: error.message})
        }
    }
}

module.exports = UserController;