import { db } from '../utils/db.js';

export function createTodo(todo, userId) {
  const { title, description } = todo;
  return db.todo.create({
    data: {
      title,
      description,
      user: { connect: { id: userId } },
    },
  });
}
