import sequelize from "../config/config.js";

const User = {
  // Mendapatkan semua data user dengan join tabel hak_akses dan kantor
  getAllUsers: async () => {
    const [results] = await sequelize.query(`
      SELECT 
        users.id_user, 
        users.username, 
        users.password, 
        users.nama_user, 
        users.nomor_telepon, 
        users.alamat_user, 
        users.status_user, 
        users.nama_lengkap, 
        hak_akses.id_hak_akses, 
        kantor.nama_kantor
      FROM users
      LEFT JOIN hak_akses ON users.id_hak_akses = hak_akses.id_hak_akses
      LEFT JOIN kantor ON users.id_kantor = kantor.id_kantor
    `);
    return results;
  },

  // Mendapatkan data user berdasarkan ID dengan join tabel hak_akses dan kantor
  getUserById: async (id_user) => {
    const [results] = await sequelize.query(
      `
      SELECT 
        users.id_user, 
        users.username, 
        users.password, 
        users.nama_user, 
        users.nomor_telepon, 
        users.alamat_user, 
        users.status_user, 
        users.nama_lengkap, 
        hak_akses.id_hak_akses, 
        kantor.nama_kantor
      FROM users
      LEFT JOIN hak_akses ON users.id_hak_akses = hak_akses.id_hak_akses
      LEFT JOIN kantor ON users.id_kantor = kantor.id_kantor
      WHERE users.id_user = ?
    `,
      {
        replacements: [id_user],
      }
    );
    return results[0];
  },

  // Menambahkan data user
  addUser: async (
    id_hak_akses,
    id_kantor,
    username,
    password,
    nama_user,
    nomor_telepon,
    alamat_user,
    status_user,
    nama_lengkap
  ) => {
    const result = await sequelize.query(
      `
      INSERT INTO users (
        id_hak_akses, id_kantor, username, password, nama_user, 
        nomor_telepon, alamat_user, status_user, nama_lengkap
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `,
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
          nama_lengkap,
        ],
      }
    );
    return result[0];
  },

  // Mengupdate data user
  updateUser: async (
    id_user,
    id_hak_akses,
    id_kantor,
    username,
    password,
    nama_user,
    nomor_telepon,
    alamat_user,
    status_user,
    nama_lengkap
  ) => {
    const result = await sequelize.query(
      `
      UPDATE users
      SET 
        id_hak_akses = ?, 
        id_kantor = ?, 
        username = ?, 
        password = ?, 
        nama_user = ?, 
        nomor_telepon = ?, 
        alamat_user = ?, 
        status_user = ?, 
        nama_lengkap = ?
      WHERE id_user = ?
    `,
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
          nama_lengkap,
          id_user,
        ],
      }
    );
    return result[0];
  },

  // Menghapus data user
  deleteUser: async (id_user) => {
    const result = await sequelize.query(
      `
      DELETE FROM users WHERE id_user = ?
    `,
      {
        replacements: [id_user],
      }
    );
    return result[0];
  },
};

export default User;
