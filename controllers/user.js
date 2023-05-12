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
  try {
    return await User.find();
  } catch (err) {
    const error = new Error("Could not process request");
    error.code = 400;
    throw error;
  }
}

export async function getUser(id) {
  try {
    return await User.findById(id);
  } catch (err) {
    const error = new Error("Could not find user");
    error.code = 400;
    throw error;
  }
}

export async function updateUser(id, data) {
  try {
    return await User.findByIdAndUpdate(id, data);
  } catch (err) {
    const error = new Error("Could not process request");
    error.code = 400;
    throw error;
  }
}

export async function deleteUser(id) {
  try {
    return await User.deleteOne({ _id: id });
  } catch (err) {
    const error = new Error("Could not process request");
    error.code = 400;
    throw error;
  }
}
