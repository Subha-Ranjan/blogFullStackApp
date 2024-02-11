import express from "express"
import { login, logout, register } from "../controllers/auth.js";
const router = express.Router()


router.get("/resgister", register)
router.get("/login", login)
router.get("/logout", logout)



export default router;

