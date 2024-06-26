import express from 'express';
import { isAuthenticated } from '../middlewares/auth.middlewares.js';
import {
  createTodo,
  getTodos,
  getTodoById,
  updateTodoById,
  deleteTodoById,
} from './tasks.services.js';
import {
  checkExtraFields,
  titleValidationForCreating,
  descriptionValidationForCreating,
  titleValidation,
  descriptionValidation,
  statusValidation,
  paramValid,
} from '../validation/validation.js';
import { inputValidationMiddleware } from '../middlewares/validation.middleware.js';

const router = express.Router();

router.post(
  '/',
  isAuthenticated,
  checkExtraFields,
  titleValidationForCreating,
  descriptionValidationForCreating,
  statusValidation,
  inputValidationMiddleware,
  async (req, res, next) => {
    try {
      const data = req.body;
      const { userId } = req.payload;
      const todo = await createTodo(data, userId);
      res.json(todo);
    } catch (err) {
      next(err);
    }
  },
);

router.get('/', isAuthenticated, async (req, res, next) => {
  try {
    const { userId } = req.payload;
    const todos = await getTodos(userId);
    res.json(todos);
  } catch (err) {
    next(err);
  }
});

router.get(
  '/:id',
  isAuthenticated,
  paramValid,
  inputValidationMiddleware,
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const { userId } = req.payload;
      const todo = await getTodoById(Number(id), userId);
      if (!todo) {
        res.status(400);
        res.send({ error: 'Incorrect todo id' });
      }
      res.json(todo);
    } catch (err) {
      next(err);
    }
  },
);

router.put(
  '/:id',
  isAuthenticated,
  checkExtraFields,
  titleValidation,
  descriptionValidation,
  statusValidation,
  paramValid,
  inputValidationMiddleware,
  async (req, res, next) => {
    try {
      const data = req.body;
      const { id } = req.params;
      const { userId } = req.payload;
      const todo = await updateTodoById(Number(id), userId, data);
      if (!todo) {
        res.status(400);
        res.send({ error: 'Incorrect todo id' });
      }
      res.json(todo);
    } catch (err) {
      next(err);
    }
  },
);

router.delete(
  '/:id',
  isAuthenticated,
  paramValid,
  inputValidationMiddleware,
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const { userId } = req.payload;
      const todo = await deleteTodoById(Number(id), userId);
      if (!todo) {
        res.status(400);
        res.send({ error: 'Incorrect todo id' });
      }
      res.json(todo);
    } catch (err) {
      next(err);
    }
  },
);

export default router;
