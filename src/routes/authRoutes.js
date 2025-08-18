import { Router } from 'express';
import { register, login } from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
// router.post('/profile', getUserProfile);


module.exports=router;
