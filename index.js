import express from "express"

const app = express()

// app.get("/")
// app.post("/user")
// app.put()
// app.delete()

app.get("/", (request, response) => {
  console.log("ohhhh interesting, a request just came in")
  return response.json({ name: "John Doe" })
})

app.get("/users", (request, response) => {
  console.log("yay... querying the users from the database")
  return response.json({ users: ["Bob", "Alice", "John", "Doe", "Joe"] })
})

app.listen(5000, () => {
  console.log("Now running on port 5000")
})
