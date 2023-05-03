import express from "express"
import { users } from "./database.js"

const app = express()

app.get("/", (request, response) => {
  return response.send("No data on this route. Please see /users and /todos")
})

app.get("/users", (request, response) => {
  return response.json({
    data: {
      users: users,
    },
  })
})

app.get("/users/:id", (request, response) => {
  const userId = request.params.id
  const user = users.find((element) => element.id === Number(userId))
  console.log(user)
  if (user) {
    return response.json({
      data: {
        user: user,
      },
    })
  } else {
    return response.json({
      error: {
        code: 404,
        message: "User not found",
      },
    })
  }
})

app.listen(5000, () => {
  console.log("Now running on port 5000")
})
