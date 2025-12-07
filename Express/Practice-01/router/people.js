import express, { Router } from "express";
import { ppl } from "../controller/ppl.js";

const router =Router()

router.get("/ppl",ppl)

module.exports= router;
