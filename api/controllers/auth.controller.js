import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import pkg from 'jsonwebtoken';

const jwt = pkg;

export const signup = async (req, res, next) =>{
    
    const password = 'myPassword';
    const {username, email} = req.body;

    if(!username || !email || !password || username === '' || email === '' || password ===''){
        next(errorHandler(400, 'All fields are required'))
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
        username,
        email,
        password : hashedPassword,

    });

    try{
        
        await newUser.save();
        res.json('Signup successful');
    }
    catch(error){

       next(error);
    }


};

export const signin  = async (req, res, next) => {
     
    const {email, password } =req.body;

    if(!email || !password || email === '' || password === ''){
        next(errorHandler(400, 'All Fields are required'));
    }

    try{
        const validUser = await User.findOne({email});
        if(!validUser){
            next(errorHandler(404, 'User not found'))
        }
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if(!validPassword){
            next(errorHandler(404, 'Invalid Password'))
        }

        const token  = jwt.sign(
           { id: validUser._id}, process.env.JWT_SECRET
        )

        res.status(200).cookie('access_token', token,{
            httpOnly: true}).json(validUser);
        }
    catch(error){
        next(error);
    }
}