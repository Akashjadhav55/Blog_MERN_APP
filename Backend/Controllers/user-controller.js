import User from "../Models/user.model.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import * as dotenv from 'dotenv';
import user from "../Models/user.model";
dotenv.config();


export default async function getAllUser(req, res, next){
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


export default async function Signup(req, res, next){
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

export default async function Login( req, res, next){
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

export default async function EditProfile(req, res, next) {
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


export default async function GetUserById(req, res, next){
    const userID = req.params.id

    let existingUser;
    try {
       existingUser = await User.findById(userID) 
    } catch (error) {
        console.log(error)
       return res.status(400).json({message : "can't find id"})
    }

    if(!existingUser){
        return res.status(500).json({message: "User Is Not Found"})
    }
    return res.status(200).json({existingUser})
}
