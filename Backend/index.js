import express from "express"
import cors from "cors"
// import connection from "./Config/db.js"
import mongoose from "mongoose"
import router from "./routes/user-routes.js"

const app = express()
app.use(express.json())
app.use(cors())

const port = 8080

app.get("/", (res,req)=>{
  return res.status(200).json({
    "message": "Thanks for visiting"
  })
})

app.use("/user",router) 

mongoose.set('strictQuery', true);
mongoose
  .connect("mongodb://127.0.0.1:27017/Blogapp")
  .then(() => app.listen(port))
  .then(() => 
      console.log("s╕erver is running on http://localhost:"+ port)
  )
  .catch((err) => console.log(err)) 



