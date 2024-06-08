import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'; // Import bcryptjs module
import { errorHandler } from "../utils/error.js";

export const updateUser = async (req, res, next) => {
    try {
        // Check if the user updating the profile is the same as the user being updated
        if (req.user.id != req.params.userId) {
            return next(errorHandler(403, 'You are not allowed to update this user'));
        }

        // Validate and hash password if provided
        if (req.body.password) {
            if (req.body.password.length < 6) {
                return next(errorHandler(400, 'Password must be at least 6 characters'));
            }
            req.body.password = bcryptjs.hashSync(req.body.password, 10);
        }

        // Validate username if provided
        if (req.body.username) {
            const username = req.body.username;
            if (username.length < 7 || username.length > 20) {
                return next(errorHandler(400, 'Username must be between 7 and 20 characters'));
            }
            if (username.includes(' ')) {
                return next(errorHandler(400, 'Username cannot contain spaces'));
            }
            if (username !== username.toLowerCase()) {
                return next(errorHandler(400, 'Username must be lowercase'));
            }
            if (!username.match(/^[a-zA-Z0-9]+$/)) {
                return next(errorHandler(400, 'Username can only contain letters and numbers'));
            }
        }

        // Update user information
        const updatedUser = await User.findByIdAndUpdate(
            req.params.userId,
            {
                $set: {
                    username: req.body.username,
                    email: req.body.email,
                    profilePicture: req.body.profilePicture,
                    password: req.body.password,
                },
            },
            { new: true }
        );

        // Remove password from the response
        const { password, ...rest } = updatedUser._doc;
        res.status(200).json(rest);
    } catch (error) {
        next(error); // Pass error to error handling middleware
    }
    
};
export const test = (req, res) => {
    res.json({ message: 'API is working!' });
};

export const deleteUser = async (req, res, next) =>{
    if(req.user.id !== req.params.userId){
        return next(errorHandler(403,"You are not allowed to delete this user"))
    }
    try{
        await User.findByIdAndDelete(req.params.userId)
        res.status(200).json('User has been deleted')
    }
    catch(error){
        next(error)
    }
}

export const signout = (req, res, next) =>{
    try{
        res.clearCookie('access_token').status(200).json('user has been sign out');
    }
    catch(error){
        next(error)
        
    }
}