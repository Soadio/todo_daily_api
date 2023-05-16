import { Router, request, response } from "express";
import {
  createTodo,
  deleteTodo,
  getTodo,
  getTodos,
  updateTodo,
} from "../controllers/todo.js";

const router = Router();

// GET request for all todos for a user
// GET /todos?authorId=
router.get("/", async (request, response) => {
  try {
    const { authorId } = request.query;
    const todos = await getTodos(authorId);
    response.status(200).json({
      data: {
        todos,
      },
    });
  } catch (error) {
    response.status(error.code).json({
      error: {
        code: error.code,
        message: error.message,
      },
    });
  }
});

// GET request for a single todo
// GET /todos/:id
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const todo = await getTodo(id);
    response.status(200).json({
      data: {
        todo,
      },
    });
  } catch (error) {
    response.status(error.code).json({
      error: {
        code: error.code,
        message: error.message,
      },
    });
  }
});

// POST request to create a todo
// POST /todos
router.post("/", async (request, response) => {
  try {
    const data = request.body;
    const todo = await createTodo(data);
    response.status(200).json({
      data: { todo },
    });
  } catch (error) {
    response.status(error.code).json({
      error: {
        code: error.code,
        message: error.message,
      },
    });
  }
});

// PUT request to update a todo
// PUT /todos/:id
router.put("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const data = request.body;
    const todo = await updateTodo(id, data);
    response.status(200).json({
      data: { todo },
    });
  } catch (error) {
    response.status(error.code).json({
      error: {
        code: error.code,
        message: error.message,
      },
    });
  }
});

// DELETE request to delete a todo
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    await deleteTodo(id);
    response.status(200).json({
      data: {
        message: "Todo deleted successfully",
      },
    });
  } catch (error) {
    response.status(error.code).json({
      error: {
        code: error.code,
        message: error.message,
      },
    });
  }
});

export const todosRouter = router;
