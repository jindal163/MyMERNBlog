import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './router/user.route.js'
import authRoute from './router/auth.route.js'
import postRoutes from './router/post.route.js'
import cookieParser from 'cookie-parser';
// import bodyParser from 'body-parser';


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
app.use(cookieParser());
// app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}))

app.listen(3000, ()=> console.log("server started!!"))

app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/post', postRoutes);

app.use((err, req, res, next )=>{
    const statusCode = err.status || 500;
    const message = err.message || 'Something went wrong!';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})