import { db } from '../utils/db.js';

export function createUserByEmailAndPassword(user) {
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
