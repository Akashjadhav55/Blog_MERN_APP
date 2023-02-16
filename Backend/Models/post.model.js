import mongoose from "mongoose"

const postSchema = new mongoose.Schema(
    {
        title: {
            type : String,
            required : true
        },
        description : {
            type : String,
            required: true,
        },
        image: {
            type : String,
            required : true
        },
        user:{
            type: mongoose.Types.ObjectId,
            ref: "User",
            required: true
        }
    },
    {
        versionKey: false,
        timestamps: true
      }
)

export default mongoose.model("post", postSchema)