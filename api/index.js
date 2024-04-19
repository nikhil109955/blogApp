import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cors from 'cors';

dotenv.config();

mongoose
.connect(process.env.MONGO)
.then(()=>{console.log('Database is connected')}).catch((err)=>{
    console.log(err);
});

const app = express();

app.use(express.json());

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
});
app.get('/test',(req, res)=>{
    res.json({message: 'API is working'})
})

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);


app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json())


//middleware
app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Servor Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    })

});