import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name : {
        type: String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type: String,
        required: true,
        minlength : 6
    }
    },
    {
    versionKey: false,
    timestamps: true
  }
);

const user = mongoose.model("User", userSchema)

export default user