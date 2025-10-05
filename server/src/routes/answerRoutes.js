import { Router } from "express";
import { requireAuth } from "../middleware/authMiddleware.js";
const router=Router();
//router.post
router.post('/', requireAuth);
router.get('/by-interview/:interviewId', requireAuth);

export default router;