
import express from "express"
import getAllPost from "../Controllers/post-controller"
const allblogrouter = express.Router()
allblogrouter.get("/", getAllPost)

export default allblogrouter