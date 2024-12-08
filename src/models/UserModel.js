import sequelize from "../config/config.js";

const User = {
  getAllUsers: async () => {
    const [results] = await sequelize.query("SELECT * FROM users");
    return results;
  },

  getUserById: async (id_user) => {
    const [results] = await sequelize.query(
      "SELECT * FROM users WHERE id_user = ?",
      {
        replacements: [id_user],
      }
    );
    return results[0];
  },

  addUser: async (
    id_hak_akses,
    id_kantor,
    username,
    password,
    nama_user,
    nomor_telepon,
    alamat_user,
    status_user
  ) => {
    const result = await sequelize.query(
      "INSERT INTO users (id_hak_akses, id_kantor, username, password, nama_user, nomor_telepon, alamat_user,  status_user) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      {
        replacements: [
          id_hak_akses,
          id_kantor,
          username,
          password,
          nama_user,
          nomor_telepon,
          alamat_user,
          status_user,
        ],
      }
    );
    return result[0];
  },

  updateUser: async (
    id_hak_akses,
    id_kantor,
    username,
    password,
    nama_user,
    nomor_telepon,
    alamat_user,
    status_user
  ) => {
    const result = await sequelize.query(
      "UPDATE users SET id_hak_akses = ?, id_kantor = ?, username = ?, password = ?, nama_user = ?, nomor_telepon = ?, alamat_user = ?, status_user = ? WHERE id_user = ?",
      {
        replacements: [
          id_hak_akses,
          id_kantor,
          username,
          password,
          nama_user,
          nomor_telepon,
          alamat_user,
          status_user,
        ],
      }
    );
    return result[0];
  },

  deleteUser: async (id_user) => {
    const result = await sequelize.query(
      "DELETE FROM users WHERE id_user = ?",
      {
        replacements: [id_user],
      }
    );
    return result[0];
  },
};

export default User;
