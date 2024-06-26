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

export function getTodos(userId) {
  return db.todo.findMany({ where: { user_id: userId } });
}

export function getTodoById(todoId, userId) {
  return db.todo.findUnique({ where: { id: todoId, user_id: userId } });
}

export function updateTodoById(todoId, userId, data) {
  return db.todo.update({ where: { id: todoId, user_id: userId }, data });
}

export function deleteTodoById(todoId, userId) {
  return db.todo.delete({ where: { id: todoId, user_id: userId } });
}
