import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './router/user.route.js'
import authRoute from './router/auth.route.js'


dotenv.config()
let uri = process.env.MONGO
console.log(uri);

mongoose.connect(uri)
.then(()=>{
    console.log('Database connected');
})
.catch((err)=>{
    console.log('Error connecting to database',err);    
})
const app = express();
app.use(express.json());

app.listen(3000, ()=> console.log("server started!!"))

app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);

app.use((err, req, res, next )=>{
    const statusCode = err.status || 500;
    const message = err.message || 'Something went wrong!';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})