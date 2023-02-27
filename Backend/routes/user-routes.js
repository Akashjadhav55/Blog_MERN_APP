import express from "express"
import getAllUser from "../Controllers/user-controller.js"
import Signup from "../Controllers/user-controller.js"
import Login from "../Controllers/user-controller.js"
import EditProfile from "../Controllers/user-controller.js"
import GetUserById from "../Controllers/user-controller.js"



const userRouter = express.Router()

userRouter.get("/", getAllUser)
userRouter.post("/signup", Signup)
userRouter.post("/login", Login)
userRouter.patch("/edit/:id", EditProfile)
userRouter.get('/:id', GetUserById)


export default userRouter