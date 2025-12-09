import express from "express"
import { CreateUsers, ReadSignleData, Users } from "../Controller/Users.js"

const router= express.Router()

router.route("/user").get(Users)

router.route("/user").post(CreateUsers)

router.route("/user/:id").get(ReadSignleData)
export default router