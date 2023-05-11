import { Router } from "express";
import { users } from "../database.js";
import { createUser, getUsers, updateUser } from "../controllers/user.js";

const router = Router();

// GET all users
router.get("/", async (request, response) => {
  try {
    const users = await getUsers();
    response.json({
      data: {
        users: users,
      },
    });
  } catch (error) {
    response.status(500).json({
      error: {
        code: 500,
        message: "Could not fetch users",
      },
    });
  }
});

// GET a user by id
router.get("/:id", (request, response) => {
  const userId = request.params.id;
  const user = users.find((element) => element.id === Number(userId));

  if (user) {
    return response.status(200).json({
      data: {
        user: user,
      },
    });
  } else {
    return response.status(404).json({
      error: {
        code: 404,
        message: "User not found",
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
  const id = request.params.id;
  const body = request.body;
  const user = await updateUser(id, body);

  return response.status(200).json({
    data: {
      code: 200,
      message: "User updated successfully",
      user,
    },
  });
});

// DELETE a user
router.delete("/:id", (request, response) => {
  const id = request.params.id;
  const user = users.find((element) => element.id === Number(id));

  if (!user) {
    return response.status(404).json({
      error: {
        success: false,
        code: 404,
        message: "User not found",
      },
    });
  }

  users.splice(users.indexOf(user), 1);

  return response.status(200).json({
    data: {
      success: true,
      message: "User deleted",
    },
  });
});

export const usersRouter = router;
