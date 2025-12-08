import { Router } from "express";
import { ppl } from "../controller/ppl.js";

const router = Router();

// Final route becomes: /ppl
router.get("/", ppl);

export default router;

