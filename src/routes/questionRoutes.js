import { Router } from "express";
import { requireAuth } from "../middleware/authMiddleware";

const router=Router();
router.post('/generate',requireAuth);
router.get('/:interviewId',requireAuth);

export default router;