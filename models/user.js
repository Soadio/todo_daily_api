import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: String,
  name: String,
  username: String,
  email: String,
  createdAt: String,
  updatedAt: String,
});

export const User = mongoose.model("User", userSchema);
