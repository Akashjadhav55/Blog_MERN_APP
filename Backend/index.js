import express from "express"
import cors from "cors"
// import connection from "./Config/db.js"
import mongoose from "mongoose"
import userRouter from "./routes/user-routes.js"
import blogrouter from "./routes/post-route.js"
import { auth } from "./middlewares/auth.js"

const app = express()
app.use(express.json())
app.use(cors())

const port = 8080

app.get('/', (req,res)=>{
  return res.status(200).json({
    "message": "Thank you for visiting this website"
  });
})

app.use("/user",userRouter) 
app.use(auth)
app.use("/blog", blogrouter)

mongoose.set('strictQuery', true);
mongoose
  .connect("mongodb://127.0.0.1:27017/Blogapp")
  .then(() => app.listen(port))
  .then(() => 
      console.log("server is running on http://localhost:"+ port)
  )
  .catch((err) => console.log(err)) 



