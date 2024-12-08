import sequelize from "../config/config.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const [user] = await sequelize.query(
      "SELECT users.*, hak_akses.* FROM users JOIN hak_akses ON users.id_hak_akses = hak_akses.id_hak_akses WHERE username = :username",
      {
        replacements: { username },
        type: sequelize.QueryTypes.SELECT,
      }
    );

    if (!user) {
      return res.status(401).json({
        status: "error",
        message: "Username atau password salah.",
      });
    }

    // const isMatch = await bcrypt.compare(password, user.password);
    const isMatch = await user.password;

    if (!isMatch) {
      return res.status(401).json({
        status: "error",
        message: "Username atau password salah banget.",
      });
    }

    const token = jwt.sign(
      { id_user: user.id_user, id_hak_akses: user.id_hak_akses },
      SECRET_KEY,
      { expiresIn: "1h" }
    );

    return res.json({
      status: "success",
      message: "Login berhasil.",
      data: user,
      token,
    });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({
      status: "error",
      message: "Terjadi kesalahan saat memproses permintaan.",
    });
  }
};
