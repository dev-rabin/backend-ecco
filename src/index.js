require('dotenv').config();
const express = require ('express');
const mongoose = require ('mongoose');

const app = express();

app.use(express.json());
const mongoDbApi = "mongodb+srv://robinmandhotia:Robin123@rabincluster.ukgzcqb.mongodb.net/ecommerce?retryWrites=true&w=majority"

mongoose.connect(mongoDbApi);
const database = mongoose.connection
database.on('error',(error)=>{
    console.log(error);
})

database.once('connected', () =>{
    console.log('Database Connected');
})

const userRouter = require('./routes/user_routes');
app.use('/api/user', userRouter)

app.listen(3000, () => {
    console.log(`server started at ${3000}`);
})