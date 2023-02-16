import express from "express"
import { addPost, deletePost, getAllPost, getById, updatePost } from "../Controllers/post-controller";
const blogrouter = express.Router()

blogrouter.get("/", getAllPost)
blogrouter.post("/add", addPost)
blogrouter.put("/update/:id", updatePost)
blogrouter.get("/:id", getById)
blogrouter.delete("/:id" , deletePost)
blogrouter.get("/user/:id",)

export default blogrouter;