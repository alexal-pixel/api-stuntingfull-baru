import sequelize from "../config/config.js";

const Provinsi = {
  // Mendapatkan semua data provinsi
  getAllProvinsi: async () => {
    const [results] = await sequelize.query(`
      SELECT 
        id_provinsi, 
        kode_provinsi, 
        nama_provinsi
      FROM provinsi
    `);
    return results;
  },

  // Mendapatkan data provinsi berdasarkan ID
  getProvinsiById: async (id_provinsi) => {
    const [results] = await sequelize.query(
      `
      SELECT 
        id_provinsi, 
        kode_provinsi, 
        nama_provinsi
      FROM provinsi
      WHERE id_provinsi = ?
    `,
      {
        replacements: [id_provinsi],
      }
    );
    return results[0];
  },

  // Menambahkan data provinsi
  addProvinsi: async (kode_provinsi, nama_provinsi) => {
    const result = await sequelize.query(
      `
      INSERT INTO provinsi (
        kode_provinsi, 
        nama_provinsi
      ) VALUES (?, ?)
    `,
      {
        replacements: [kode_provinsi, nama_provinsi],
      }
    );
    return result[0];
  },

  // Mengupdate data provinsi
  updateProvinsi: async (id_provinsi, kode_provinsi, nama_provinsi) => {
    const result = await sequelize.query(
      `
      UPDATE provinsi
      SET 
        kode_provinsi = ?, 
        nama_provinsi = ?
      WHERE id_provinsi = ?
    `,
      {
        replacements: [kode_provinsi, nama_provinsi, id_provinsi],
      }
    );
    return result[0];
  },

  // Menghapus data provinsi berdasarkan ID
  deleteProvinsi: async (id_provinsi) => {
    const result = await sequelize.query(
      `
      DELETE FROM provinsi WHERE id_provinsi = ?
    `,
      {
        replacements: [id_provinsi],
      }
    );
    return result[0];
  },
};

export default Provinsi;
