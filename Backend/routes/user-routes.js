import express from "express"
import { getAllUser } from "../Controllers/user-controller.js"

const router = express.Router()

router.get("/", getAllUser)

export default router