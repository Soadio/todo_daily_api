import { Todo } from "../models/todo";

// getTodos => get all todo items in the database for a user
export async function getTodos(authorId) {
  try {
    // SELECT * FROM todos WHERE authorId = $authorId
    // ORDER BY createdAt DESC;
    const todos = await Todo.find({ authorId }).sort({ createdAt: "desc" });
    return todos;
  } catch (err) {
    const error = new Error("Could not query database");
    error.code = 400;
    throw error;
  }
}

// getTodo => get a single todo item
export async function getTodo(id) {
  try {
    // SELECT * FROM todos WHERE id = $id;
    const todo = await Todo.findById(id);
    return todo;
  } catch (err) {
    const error = new Error("Could not find todo item");
    error.code = 400;
    throw error;
  }
}

// createTodo => create a new todo item
export async function createTodo(data) {
  try {
    // INSERT INTO todos VALUES (data);
    const todo = await Todo.create(data);
    return todo;
  } catch (err) {
    const error = new Error("Could not create todo item");
    error.code = 400;
    throw error;
  }
}

// updateTodo => update an existing todo item
export async function updateTodo(id, data) {
  try {
    // UPDATE todos SET (data) WHERE id = $id
    const todo = await Todo.findByIdAndUpdate(id, data);
    return todo;
  } catch (err) {
    const error = new Error("Could not update todo item");
    error.code = 400;
    throw error;
  }
}

// deleteTodo => delete an existing todo item
export async function deleteTodo(id) {
  try {
    // DELETE FROM todos WHERE id = $id
    const result = await Todo.findByIdAndDelete(id);
    return result;
  } catch (err) {
    const error = new Error("Could not delete todo item");
    error.code = 400;
    throw error;
  }
}
