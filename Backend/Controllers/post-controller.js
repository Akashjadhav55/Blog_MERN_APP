import mongoose from "mongoose";
import Post from "../Models/post.model.js"
import user from "../Models/user.model";
import User from "../Models/user.model.js"

export default async function getAllPost(req, res, next){
    let blogs;
    try {
        blogs = await Post.find().populate("user")
    } catch (error) {
        console.log(error)
        return res.status(500).json({message : "error"})
    }
    if(!blogs){
        return res.status(404).json({message:"No Blogs Found"})
    }
    return res.status(200).json({blogs})
}

export default async function addPost(req, res, next){
    const { title, description, image, user } = req.body

    let existingUser;
    try {
        existingUser = await User.findById(user)
    } catch (error) {
        return console.log(error)
    }
    if(!existingUser){
        return res.status(400).json({
            message:"unble to find blog by id"
        })
    }
    

    const blog = new Post({
        title,
        description,
        image,
        user,
    });
    try {
    //    const session  = await mongoose.startSession()
    //    session.startTransaction()
    //    await blog.save({session})
    //    existingUser.blogs.push(blog);
    //    await existingUser.save({session})
    //    await session.commitTransaction()
        await blog.save()
        existingUser.blogs.push(blog)
        await existingUser.save()
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: error})
    }
    return res.status(200).json({blog})
}

export default async function updatePost(req, res, next){
        const { title, description } = req.body
        const blogId = req.params.id;
        let blog;
        try {
             blog = await Post.findByIdAndUpdate(blogId, {
                title,
                description
            })

        } catch (error) {
           return console.log(error)
        }

        if(!blog){
            return res.status(500).json({message:"Unable To Update The Blog"})
        }
        return res.status(200).json({blog})
}

export default async function getById(req ,res , next){
    const id = req.params.id;
    let blog;
    try {
        blog = await Post.findById(id).populate("user")
    } catch (error) {
        return console.log(error)
    }
    if(!blog){
        return res.status(404).json({message:"Blog Not Found"})
    }
    return res.status(200).json({blog})
}

export default async function deletePost(req, res, next){
    const id = req.params.id
    let blog;

    try {
        blog = await Post.findByIdAndRemove(id).populate('user');

        await blog.user.blogs.pull(blog)
        await blog.user.save()
    } catch (error) {
        console.log(error)
        return res.json({message: "Blog Is Not Exists"})
    }
    if(!blog){
        return res.status(404).json({message:"Unable to delete"})
    }
    return res.status(200).json({message:"Successfully Delete"})

}




export default async function getByUserId(req, res, next){
    const userId = req.params.id

    let userBlog;
    try {
        userBlog = await User.findById(userId).populate('blogs')    
    } catch (error) {
        return console.log(error)
    }
    if(!userBlog){
        return res.status(404).json({message : "No Blog Found"})
    }
    return res.status(200).json({userBlog})

}