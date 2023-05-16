import mongoose, { Schema } from "mongoose";

const todoSchema = new Schema({
  authorId: { type: String, required: [true, "authorId is required"] },
  title: { type: String, required: [true, "title is required"] },
  body: { type: String, required: [true, "body is required"] },
  deadline: Date,
  completed: Boolean,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const Todo = mongoose.model("Todo", todoSchema);
