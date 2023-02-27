import mongoose from "mongoose";
let username = process.env.USERNAME
let password = process.env.PASSWORD
const connection = async () => {
    // mongoose.set('strictQuery', false);
    await mongoose.connect('mongodb+srv://Akash:Akash123@mernapp.dwvxq6l.mongodb.net/?retryWrites=true&w=majority')
    // await mongoose.connect('mongodb://127.0.0.1:27017/Blogapp')
}

export default connection