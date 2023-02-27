import express from "express"
import { addPost, deletePost, getAllPost, getById, getByUserId, updatePost } from "../Controllers/post-controller";
const blogrouter = express.Router()

blogrouter.get("/", getAllPost)
blogrouter.post("/add", addPost)
blogrouter.patch("/update/:id", updatePost)
blogrouter.get("/:id", getById)
blogrouter.delete("/:id" , deletePost)
blogrouter.get("/user/:id", getByUserId)

export default blogrouter;