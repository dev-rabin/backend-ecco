const express = require('express');
const userRouter = express.Router();
const model = require('../models/user_model')

// Post Method
userRouter.post('/postData',async (req,res) =>{
    // res.send('POST API')
    const data = new model({
        name : req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    } catch (error) {
        res.status(400).json({message : error.message})
    }
})

// Get all Method
userRouter.get('/AllData', async (req, res) => {
    try {
        const data = await model.find();
        res.json(data)
    } catch (error) {
        res.status(200).json({message: error.message})
    }
})


// Get by ID Method
userRouter.get('/getOne/:id', async (req,res) =>{
    try {
        const data = await model.findById(req.params.id);
        res.json(data);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

// Update by ID Method 
userRouter.patch('/update/:id', (req,res) =>{
    res.send('Update by ID')
})
// Delte by ID 
userRouter.delete('/delete/:id', (req,res) =>{
    res.send('Delete by id')
})
module.exports = userRouter;