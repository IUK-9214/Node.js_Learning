import express from "express"
import { CreateUsers, Users } from "../Controller/Users.js"

const router= express.Router()

router.route("/user").get(Users)
router.route("/user").post(CreateUsers)
router.route
export default router