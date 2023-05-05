import express from "express"
import path from "path"
import { usersRouter } from "./routes/users.js"

const app = express()
app.use(express.json())

app.get("/", (request, response) => {
  return response.status(200).sendFile(path.join(process.cwd(), "index.html"))
})

app.use("/users", usersRouter)

app.listen(5000, () => {
  console.log("Now running on port 5000")
})
