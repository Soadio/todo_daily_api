import express from "express"

const app = express()

app.get("/", (request, response) => {
  return response.json({ message: "Hello World" })
})

app.listen(5000, () => {
  console.log("Now running on port 5000")
})
