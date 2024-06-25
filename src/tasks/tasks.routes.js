import express from 'express';
import { isAuthenticated } from "../middlewares/auth.middlewares.js";
import { findUserById } from "../users/users.services.js"

const router = express.Router();

router.get('/', isAuthenticated, async (req, res, next) => {
  try {
    const { userId } = req.payload;
    const user = await findUserById(userId);
    delete user.password;
    res.json(user);
  } catch (err) {
    next(err);
  }
});

export default router