import express from "express"
import { addPost, getAllPost, updatePost } from "../Controllers/post-controller";
const blogrouter = express.Router()

blogrouter.get("/", getAllPost)
blogrouter.post("/add", addPost)
blogrouter.put("/update/:id", updatePost)

export default blogrouter;