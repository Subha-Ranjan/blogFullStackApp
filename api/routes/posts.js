import express from "express"
import { addPost } from "../controllers/post.js";
const router = express.Router()
export default router;

router.get("/", (req,res)=> (res.json("This is POst"))) //can put the callback in fiffrent place => controller
router.get("/test", addPost)

