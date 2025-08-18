import { Router } from "express";
import { requireAuth } from "../middleware/authMiddleware";
import { register,login } from "../controllers/authController";

const router=Router();
router.get('/me', requireAuth);

export default router;