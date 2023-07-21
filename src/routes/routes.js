const express = require('express');
const router = express.Router();
const model = require('./../models/user_model')

// Post Method
router.post('/post',async (req,res) =>{
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
router.get('/getAll' ,(req,res) => {
    res.send('Get All API')
})

// Get by ID Method
router.get('/getOne/:id', (req,res) =>{
    res.send('Get by ID API');
})

// Update by ID Method 
router.patch('/update/:id', (req,res) =>{
    res.send('Update by ID')
})
// Delte by ID 
router.delete('/delete/:id', (req,res) =>{
    res.send('Delete by id')
})
module.exports = router;