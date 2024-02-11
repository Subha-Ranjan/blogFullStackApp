import express from "express";
import postsRoute from "./routes/posts.js"

const app = express()

app.use(express.json())//to use JSON with express
app.use("/api/posts", postsRoute)
app.use("/api/users", usersRoute)
app.use("/api/auth", authRoute)

app.listen(8800,
    ()=>{
        console.log("connected!!")
    })









// app.get("/test",(req,res)=>{
//     res.json("It works")
// })