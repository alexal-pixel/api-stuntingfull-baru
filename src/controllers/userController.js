import User from "../models/UserModel.js";
import bcrypt from "bcryptjs";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.getAllUsers();
    res.json({
      status: "success",
      data: users,
      message: "Users fetched successfully.",
    });
  } catch (error) {
    console.error("Error fetching users data:", error);
    res.status(500).json({
      status: "error",
      data: null,
      message: "Internal Server Error",
    });
  }
};

export const getUserData = async (req, res) => {
  const userId = req.user.id;
  try {
    const userData = await User.getUserById(userId);
    res.json({
      status: "success",
      data: userData,
      message: "User data fetched successfully.",
    });
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({
      status: "error",
      data: null,
      message: "Internal Server Error",
    });
  }
};

export const createUser = async (req, res) => {
  const {
    id_hak_akses,
    id_kantor,
    username,
    password,
    nama_user,
    nomor_telepon,
    alamat_user,
    status_user,
  } = req.body;

  try {
    const hashedPassword = bcrypt.hashSync(password, 10);

    await User.addUser(
      id_hak_akses,
      id_kantor,
      username,
      password,
      nama_user,
      nomor_telepon,
      alamat_user,
      status_user
    );

    res.status(201).json({
      status: "success",
      data: { id_hak_akses, username, nama_lengkap },
      message: "User created successfully.",
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({
      status: "error",
      data: null,
      message: "Internal Server Error",
    });
  }
};
export const updateUser = async (req, res) => {
  const { id_user } = req.params;
  const {
    id_hak_akses,
    id_kantor,
    username,
    password,
    nama_user,
    nomor_telepon,
    alamat_user,
    status_user,
  } = req.body;

  try {
    await User.updateUser(
      id_hak_akses,
      id_kantor,
      username,
      password,
      nama_user,
      nomor_telepon,
      alamat_user,
      status_user
    );
    res.json({
      status: "success",
      data: null,
      message: "User updated successfully.",
    });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({
      status: "error",
      data: null,
      message: "Internal Server Error",
    });
  }
};

export const deleteUser = async (req, res) => {
  const { id_user } = req.params;

  try {
    await User.deleteUser(id_user);
    res.json({
      status: "success",
      data: null,
      message: "User deleted successfully.",
    });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({
      status: "error",
      data: null,
      message: "Internal Server Error",
    });
  }
};
