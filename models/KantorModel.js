import sequelize from "../config/config.js";

const Kantor = {
  // Mendapatkan semua data kantor
  getAllKantor: async () => {
    const [results] = await sequelize.query(`
      SELECT 
        id_kantor, 
        nama_kantor, 
        kode_kantor, 
        alamat_kantor
      FROM kantor
    `);
    return results;
  },

  // Mendapatkan data kantor berdasarkan ID
  getKantorById: async (id_kantor) => {
    const [results] = await sequelize.query(
      `
      SELECT 
        id_kantor, 
        nama_kantor, 
        kode_kantor, 
        alamat_kantor
      FROM kantor
      WHERE id_kantor = ?
    `,
      {
        replacements: [id_kantor],
      }
    );
    return results[0];
  },

  // Menambahkan data kantor baru
  addKantor: async (nama_kantor, kode_kantor, alamat_kantor) => {
    const result = await sequelize.query(
      `
      INSERT INTO kantor (
        nama_kantor, 
        kode_kantor, 
        alamat_kantor
      ) VALUES (?, ?, ?)
    `,
      {
        replacements: [nama_kantor, kode_kantor, alamat_kantor],
      }
    );
    return result[0];
  },

  // Mengupdate data kantor
  updateKantor: async (id_kantor, nama_kantor, kode_kantor, alamat_kantor) => {
    const result = await sequelize.query(
      `
      UPDATE kantor
      SET 
        nama_kantor = ?, 
        kode_kantor = ?, 
        alamat_kantor = ?
      WHERE id_kantor = ?
    `,
      {
        replacements: [nama_kantor, kode_kantor, alamat_kantor, id_kantor],
      }
    );
    return result[0];
  },

  // Menghapus data kantor berdasarkan ID
  deleteKantor: async (id_kantor) => {
    const result = await sequelize.query(
      `
      DELETE FROM kantor WHERE id_kantor = ?
    `,
      {
        replacements: [id_kantor],
      }
    );
    return result[0];
  },
};

export default Kantor;
