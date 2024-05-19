import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import pkg from 'jsonwebtoken';

const jwt = pkg;

export const signup = async (req, res, next) =>{
    const {username, email, password } = req.body; // Destructure password from the request body

    // Check if any required field is missing or empty
    if(!username || !email || !password || username === '' || email === '' || password ===''){
        return next(errorHandler(400, 'All fields are required')); // Return here to prevent further execution
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
        username,
        email,
        password: hashedPassword, // Store the hashed password
    });

    try{
        await newUser.save();
        res.json('Signup successful');
    }
    catch(error){
       next(error);
    }
};


export const signin = async (req, res, next) => {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
        return next(errorHandler(400, 'Email and password are required'));
    }

    try {
        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return next(errorHandler(404, 'User not found'));
        }

        // Compare the provided password with the hashed password stored in the database
        const validPassword = bcryptjs.compareSync(password, user.password);
        if (!validPassword) {
            return next(errorHandler(401, 'Invalid email or password'));
        }

        // Generate a JWT token for authentication
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

        // Set the token as a cookie and send the user data in the response
        res.status(200).cookie('access_token', token, { httpOnly: true }).json(user);
    } catch (error) {
        // Handle unexpected errors
        next(error);
    }
};

export const google = async (req, res, next) =>{
    const {email, name, googlePhotoUrl} = req.body;

    try{
        const user = await User.findOne({email});
        if(user){
            const token = jwt.sign(
                { id: user._id, isAdmin: user.isAdmin },
                process.env.JWT_SECRET
              );
              const { password, ...rest } = user._doc;
              res
                .status(200)
                .cookie('access_token', token, {
                  httpOnly: true,
                })
                .json(rest);
        }
        else {
            const generatedPassword =
              Math.random().toString(36).slice(-8) +
              Math.random().toString(36).slice(-8);
            const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
            const newUser = new User({
              username:
                name.toLowerCase().split(' ').join('') +
                Math.random().toString(9).slice(-4),
              email,
              password: hashedPassword,
              profilePicture: googlePhotoUrl,
            });
            await newUser.save();
            const token = jwt.sign(
              { id: newUser._id, isAdmin: newUser.isAdmin },
              process.env.JWT_SECRET
            );
            const { password, ...rest } = newUser._doc;
            res
              .status(200)
              .cookie('access_token', token, {
                httpOnly: true,
              })
              .json(rest);
          }
    } catch(error){
        next(error)
    }
}