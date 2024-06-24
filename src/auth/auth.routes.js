import express from 'express';
import { generateAccessToken } from '../utils/jwt.js';
import {
  findUserByEmail,
  createUserByEmailAndPassword,
} from '../users/users.services.js';

const router = express.Router();

export default router.post('/register', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400);
      throw new Error('You must provide an email and a password.');
    }

    const existingUser = await findUserByEmail(email);

    if (existingUser) {
      res.status(400);
      throw new Error('Email already in use.');
    }

    const user = await createUserByEmailAndPassword({ email, password });
    const accessToken = generateAccessToken(user);

    res.json({ accessToken });
  } catch (err) {
    next(err);
  }
});
