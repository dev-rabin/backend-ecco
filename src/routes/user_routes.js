const express = require('express');
const userRouter = express.Router();
const UserController = require('./../controllers/user_controller')

// Post Method
userRouter.post('/createAccount',UserController.createAccount);
userRouter.post('/signin', UserController.signIn);
userRouter.get('/', UserController.fetchAllUsers);
// Get all Method
// userRouter.get('/AllData', async (req, res) => {
//     try {
//         const data = await model.find();
//         res.json(data)
//     } catch (error) {
//         res.status(200).json({message: error.message})
//     }
// })


// // Get by ID Method
// userRouter.get('/getOne/:id', async (req,res) =>{
//     try {
//         const data = await model.findById(req.params.id);
//         res.json(data);
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// })

// // Update by ID Method 
// userRouter.patch('/update/:id', (req,res) =>{
//     res.send('Update by ID')
// })
// // Delte by ID 
// userRouter.delete('/delete/:id', (req,res) =>{
//     res.send('Delete by id')
// })
// userRouter.get('/getData',UserController.fetchAllData)
module.exports = userRouter;