import express from "express";
import cors from "cors";
import path from "path";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { usersRouter } from "./routers/users.js";
import { todosRouter } from "./routers/todos.js";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI, {
    dbName: "todo-daily",
  })
  .then(() => {
    console.log("Database connected successfully");
  });

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
  response.status(200).sendFile(path.join(process.cwd(), "index.html"));
});

app.use("/users", usersRouter);
app.use("/todos", todosRouter);

app.listen(5000, () => {
  console.log("Now running on port 5000");
});
