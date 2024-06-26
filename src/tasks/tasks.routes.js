import express from 'express';
import { isAuthenticated } from '../middlewares/auth.middlewares.js';
import {
  createTodo,
  getTodos,
  getTodoById,
  updateTodoById,
  deleteTodoById,
} from './tasks.services.js';

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

router.get('/', isAuthenticated, async (req, res, next) => {
  try {
    const { userId } = req.payload;
    const todos = await getTodos(userId);
    res.json(todos);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', isAuthenticated, async (req, res, next) => {
  try {
    const { id } = req.params;
    const { userId } = req.payload;
    const todo = await getTodoById(Number(id), userId);
    if (!todo) {
      res.send({ error: 'Incorrect todo id' });
    }
    res.json(todo);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', isAuthenticated, async (req, res, next) => {
  try {
    const data = req.body;
    const { id } = req.params;
    const { userId } = req.payload;
    const todo = await updateTodoById(Number(id), userId, data);
    if (!todo) {
      res.send({ error: 'Incorrect todo id' });
    }
    res.json(todo);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', isAuthenticated, async (req, res, next) => {
  try {
    const { id } = req.params;
    const { userId } = req.payload;
    const todo = await deleteTodoById(Number(id), userId);
    console.log(todo);
    if (!todo) {
      res.send({ error: 'Incorrect todo id' });
    }
    res.json(todo);
  } catch (err) {
    next(err);
  }
});

export default router;
