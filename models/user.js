import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: [true, "name property is required"] },
  username: { type: String, required: [true, "username property is required"] },
  email: { type: String, required: [true, "email property is required"] },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const User = mongoose.model("User", userSchema);
