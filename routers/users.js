import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.js";

const router = Router();

// GET all users
router.get("/", async (request, response) => {
  try {
    const users = await getUsers();
    response.json({
      data: { users },
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

// GET a user by id
router.get("/:id", async (request, response) => {
  const userId = request.params.id;

  try {
    const user = await getUser(userId);
    response.status(200).json({
      data: { user },
    });
  } catch (err) {
    response.status(err.code).json({
      error: {
        code: err.code,
        message: err.message,
      },
    });
  }
});

// POST (add a new) user
router.post("/", async (request, response) => {
  const body = request.body;

  try {
    const user = await createUser(body);
    response.status(201).json({
      data: {
        code: 201,
        message: "User successfully added",
        user: user,
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

// PUT (update) existing user
router.put("/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const body = request.body;
    const user = await updateUser(id, body);

    response.status(200).json({
      data: {
        code: 200,
        message: "User updated successfully",
        user,
      },
    });
  } catch (err) {
    response.status(err.code).json({
      error: {
        code: err.code,
        message: err.message,
      },
    });
  }
});

// DELETE a user
router.delete("/:id", async (request, response) => {
  const id = request.params.id;

  try {
    await deleteUser(id);
    response.status(200).json({
      data: {
        success: true,
        message: "User deleted",
      },
    });
  } catch (err) {
    response.status(err.code).json({
      error: {
        code: err.code,
        message: err.message,
      },
    });
  }
});

export const usersRouter = router;
