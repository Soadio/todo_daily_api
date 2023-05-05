import { Router } from "express"
import { users } from "../database.js"

const router = Router()

// GET all users
router.get("/", (request, response) => {
  return response.json({
    data: {
      users: users,
    },
  })
})

// GET a user by id
router.get("/:id", (request, response) => {
  const userId = request.params.id
  const user = users.find((element) => element.id === Number(userId))

  if (user) {
    return response.status(200).json({
      data: {
        user: user,
      },
    })
  } else {
    return response.status(404).json({
      error: {
        code: 404,
        message: "User not found",
      },
    })
  }
})

// POST (add a new) user
router.post("/", (request, response) => {
  const userDetails = request.body
  const userId = users[users.length - 1].id + 1
  const subscribed = false

  const user = {
    id: userId,
    name: userDetails.name,
    phone: userDetails.phone,
    address: userDetails.address,
    subscribed: subscribed,
  }

  users.push(user)
  return response.status(201).json({
    data: {
      code: 201,
      message: "User successfully added",
      user: user,
    },
  })
})

const numbers = [1, 5, 4, 9, 6, 0, 1, 4, 6, 7, 9] // 11 elements

export const usersRouter = router
