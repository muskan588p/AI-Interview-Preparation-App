import { Router } from 'express';
import { register, login, getUserProfile } from '../controllers/authController.js';
import { requireAuth } from '../middleware/authMiddleware.js';
// import { requireAuth } from '../middleware/authMiddleware.js';
const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/profile',requireAuth, getUserProfile);

// router.get("/profile", requireAuth, (req, res) => {
//   res.json({ message: "User profile", user: req.user });
// });


export default router;
