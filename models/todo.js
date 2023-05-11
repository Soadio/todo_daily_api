import mongoose, { Schema, Types } from "mongoose";

const todoSchema = new Schema({
  id: Types.ObjectId,
  authorId: { type: Types.ObjectId, ref: "User" },
  title: String,
  body: String,
  deadline: Date,
  completed: Boolean,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const Todo = mongoose.model("Todo", todoSchema);
