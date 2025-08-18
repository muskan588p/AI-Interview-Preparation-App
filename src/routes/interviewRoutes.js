import {Router} from 'express';
import { requireAuth } from '../middleware/authMiddleware.js';
import { createInterview,listInterviews } from '../controllers/interviewController.js';


const router=Router();
router.post('/',requireAuth,createInterview);
router.get('/',requireAuth,listInterviews);

export default router;