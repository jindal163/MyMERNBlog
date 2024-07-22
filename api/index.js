import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'

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

app.listen(3000, ()=> console.log("server started!!"))
