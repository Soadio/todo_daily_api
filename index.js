import express from "express"
import path from "path"
import { users } from "./database.js"

const app = express()

app.get("/", (request, response) => {
  return response.status(200).sendFile(path.join(process.cwd(), "index.html"))
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

app.listen(5000, () => {
  console.log("Now running on port 5000")
})
