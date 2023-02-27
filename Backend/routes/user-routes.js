import express from "express"
import { editProfile, getAllUser, GetUserById, login, signup } from "../Controllers/user-controller.js"

const userRouter = express.Router()

userRouter.get("/", getAllUser)
userRouter.post("/signup", signup)
userRouter.post("/login", login)
userRouter.patch("/edit/:id", editProfile)
userRouter.get('/:id', GetUserById)


export default userRouter