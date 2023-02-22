import express from "express"
import { editProfile, getAllUser, login, signup } from "../Controllers/user-controller.js"

const userRouter = express.Router()

userRouter.get("/", getAllUser)
userRouter.post("/signup", signup)
userRouter.post("/login", login)
userRouter.patch("/edit/:id", editProfile)


export default userRouter