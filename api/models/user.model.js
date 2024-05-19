import { mongoose } from "mongoose";


const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        required: true

    },

    email:{
        type: String,
        required: true,
        unique: true,
        required: true
    },

    password:{
        type: String,
        required: true,
    },
    profilePicture:{
        type: String,
        default: "https://th.bing.com/th/id/OIP.0CZd1ESLnyWIHdO38nyJDAAAAA?w=216&h=180&c=7&r=0&o=5&pid=1.7",
    }
},  {timestamps: true}

);

const User = mongoose.model('User', userSchema);

export default User;