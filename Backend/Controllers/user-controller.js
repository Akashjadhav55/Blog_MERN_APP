import User from "../Models/user.model"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import * as dotenv from 'dotenv';
dotenv.config();


export const getAllUser = async (req, res, next) => {
    let users;
    try {
        users = await User.find()        
    } catch (error) {
        console.log(error)
    }
    if(!users){
        return res.status(404).json({message:"User Not Found!"})
    }
    return res.status(200).json({users})
}


export const signup = async (req, res, next) => {
    const { name , email , password } = req.body

    let existingUser;
    try {
        existingUser = await User.findOne({email}); 
    } catch (error) {
        return console.log(error)
    }
    if(existingUser){
        return res.status(400).json({message : "User Already Exits!"})
    }
    const hashedPassword = bcrypt.hashSync(password)
    const user = new User({
        name,
        email,
        password : hashedPassword,
        blogs: [],
    });


    try {
         user.save()
    } catch (error) {
        return console.log(error)
    }

    return res.status(201).json({user})
}

export const login = async ( req, res, next) => {
    const {email , password} = req.body
     const SECRET = process.env.JWT_SECRET;
    let existingUser
    try {
        existingUser = await User.findOne({email})

    } catch (error) {
        return console.log(error)
    }
    if(!existingUser){
         return res.status(404).json({message:"Couldn't Find Creadential"})
    }

    const isPasswordCorrect = bcrypt.compareSync(password,existingUser.password) //compareSync(LoginPassword, OldExistPassword)
    if(!isPasswordCorrect){
        return res.status(400).json({message: "Invalid Creadential"})
    }

    existingUser = existingUser.toJSON()
    delete existingUser.password;
    const token = jwt.sign(existingUser, SECRET)
    
    return res.status(200).json({message:"Login Successfull",
            token:token,
            user:existingUser
        })
}

export const editProfile = async (req, res, next) => {
    const { _id, name, tagline, bio, mobile, avatar } = req.body
    const userID = req.params.id
 
    let existingUser;
    try {
        
        existingUser = await User.findByIdAndUpdate(userID,{
            _id,
            name, 
            tagline, 
            bio, 
            mobile, 
            avatar
        })

    } catch (error) {
        console.log("catch err" + error)
        res.status(401).json({message: "server error",error})
    }
    if(!existingUser){
        return res.status(500).json({message : "user cann't find"})
    }
    return res.status(200).json({existingUser})

}