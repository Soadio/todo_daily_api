import { User } from "../models/user.js";

export async function createUser(data) {
  try {
    const user = new User(data);
    await user.save();
    return user;
  } catch (err) {
    if (err.name === "ValidationError") {
      const error = new Error("Unsupported data format");
      error.code = 403;
      throw error;
    }

    const error = new Error("Could not process request");
    error.code = 503;
    throw error;
  }
}

export async function getUsers() {
  return await User.find();
}

export async function updateUser(id, data) {
  return await User.findByIdAndUpdate(id, data);
}

export async function deleteUser(id) {
  return await User.deleteOne({ _id: id });
}
