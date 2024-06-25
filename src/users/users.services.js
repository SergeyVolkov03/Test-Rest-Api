import { db } from '../utils/db.js';
import bcrypt from 'bcrypt';

export function createUserByEmailAndPassword(user) {
  user.password = bcrypt.hashSync(user.password, 10);
  return db.user.create({
    data: user,
  });
}

export function findUserById(id) {
  return db.user.findUnique({
    where: {
      id,
    },
  });
}

export function findUserByEmail(email) {
  return db.user.findUnique({
    where: {
      email,
    },
  });
}
