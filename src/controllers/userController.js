import User from "../models/UserModel.js";
import bcrypt from "bcryptjs";

// Mendapatkan semua data user
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

// Mendapatkan data user berdasarkan ID
export const getUserById = async (req, res) => {
  const { id_user } = req.params;
  try {
    const user = await User.getUserById(id_user);
    if (!user) {
      return res.status(404).json({
        status: "error",
        data: null,
        message: "User not found.",
      });
    }
    res.json({
      status: "success",
      data: user,
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

// Membuat user baru
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
    nama_lengkap,
  } = req.body;

  try {
    const hashedPassword = bcrypt.hashSync(password, 10);

    await User.addUser(
      id_hak_akses,
      id_kantor,
      username,
      hashedPassword,
      nama_user,
      nomor_telepon,
      alamat_user,
      status_user,
      nama_lengkap
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

// Mengupdate data user
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
    nama_lengkap,
  } = req.body;

  try {
    const hashedPassword = bcrypt.hashSync(password, 10);

    await User.updateUser(
      id_user,
      id_hak_akses,
      id_kantor,
      username,
      hashedPassword,
      nama_user,
      nomor_telepon,
      alamat_user,
      status_user,
      nama_lengkap
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

// Menghapus user berdasarkan ID
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
