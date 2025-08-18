import {Router} from 'express';
import { createInterview,listInterviews } from '../controllers/interviewController';

const router=Router();
router.post('/',createInterview);
router.get('/',listInterviews);

export default router;