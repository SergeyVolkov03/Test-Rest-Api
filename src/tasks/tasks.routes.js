import express from 'express';
import { isAuthenticated } from '../middlewares/auth.middlewares.js';
import { createTodo } from './tasks.services.js';

const router = express.Router();

router.post('/', isAuthenticated, async (req, res, next) => {
  try {
    const data = req.body;
    const { userId } = req.payload;
    const todo = await createTodo(data, userId);
    res.json(todo);
  } catch (err) {
    next(err);
  }
});

export default router;
