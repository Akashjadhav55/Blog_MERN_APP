import mongoose from "mongoose";


const connection = async () => {
    // mongoose.set('strictQuery', false);
    await mongoose.connect('mongodb://127.0.0.1:27017/Blogapp')
}

export default connection