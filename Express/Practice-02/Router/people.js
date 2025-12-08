import express from "express"
import { createProduct, readpeople } from "../Controller/control-ppl.js";

const router=express.Router();

router.route("/people").get(readpeople)

router.route("/people").post(createProduct)

export default router