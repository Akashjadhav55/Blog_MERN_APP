import { getAllPost } from "../Controllers/post-controller.js"
import express from "express"
const allblogrouter = express.Router()
allblogrouter.get("/", getAllPost)

export default allblogrouter