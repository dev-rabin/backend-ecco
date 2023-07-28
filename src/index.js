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
// User Router
const userRouter = require('./routes/user_routes');
app.use('/api/user', userRouter);

// Product Category Router
const categoryRouter = require('./routes/category_routes');
app.use('/api/category', categoryRouter);

// Products Router
const productRouter = require('./routes/products_routes');
app.use('/api/products', productRouter);

app.listen(3000, () => {
    console.log(`server started at ${3000}`);
})