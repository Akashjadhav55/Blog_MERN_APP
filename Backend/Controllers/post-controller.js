import Post from "../Models/post.model"

export const getAllPost = async (req, res, next) => {
    let blogs;
    try {
        blogs = await Post.find()
    } catch (error) {
        return console.log(error)
    }
    if(!blogs){
        return res.status(404).json({message:"No Blogs Found"})
    }
    return res.status(200).json({blogs})
}

export const addPost = async (req, res, next) => {
    const { title, description, image, user } = req.body
    const blog = new Post({
        title,
        description,
        image,
        user,
    });
    try {
       blog.save() 
    } catch (error) {
        return console.log(err)
    }
    return res.status(200).json({blog})
}

export const updatePost = async (req, res, next) => {
        const { title, description } = req.body
        const blogId = req.params.id;
        console.log(blogId)
        let blog;
        try {
             blog = await Post.findByIdAndUpdate(blogId, {
                title,
                description
            })
            console.log(blog)
        } catch (error) {
           return console.log(error)
        }

        if(!blog){
            return res.status(500).json({message:"Unable To Update The Blog"})
        }
        return res.status(200).json({blog})
}