import express from "express"
import cors from "cors"
// import connection from "./Config/db.js"
import mongoose from "mongoose"
import userRouter from "./routes/user-routes.js"
import blogrouter from "./routes/post-route.js"
import { auth } from "./middlewares/auth.js"
import allblogrouter from "./routes/getAllPost-route.js"

const app = express()
app.use(express.json())
app.use(cors())

let username = process.env.USERNAME
let password = process.env.PASSWORD
let port = process.env.PORT || 8080;

app.get('/', (req,res)=>{
  return res.status(200).json({
    "message": "Thank you for visiting this website"
  });
})

app.use("/blogs", allblogrouter)
app.use("/user",userRouter) 
app.use(auth)
app.use("/blog", blogrouter)

mongoose.set('strictQuery', true);
mongoose
  .connect(`mongodb+srv://Akash:${password}@mernapp.dwvxq6l.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => app.listen(port))
  .then(() => 
      console.log("server is running on http://localhost:"+ port)
  )
  .catch((err) => console.log(err)) 



