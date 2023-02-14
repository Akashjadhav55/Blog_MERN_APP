import User from "../Models/user.model"


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

