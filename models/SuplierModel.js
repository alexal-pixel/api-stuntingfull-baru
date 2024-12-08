import sequelize from "../config/config.js";

const Suplier = {
  // Mendapatkan semua data suplier
  getAllSupliers: async () => {
    const [results] = await sequelize.query(`
      SELECT 
        id_suplier, 
        nama_suplier, 
        alamat_suplier, 
        nomor_telepon_suplier
      FROM suplier
    `);
    return results;
  },

  // Mendapatkan data suplier berdasarkan ID
  getSuplierById: async (id_suplier) => {
    const [results] = await sequelize.query(
      `
      SELECT 
        id_suplier, 
        nama_suplier, 
        alamat_suplier, 
        nomor_telepon_suplier
      FROM suplier
      WHERE id_suplier = ?
    `,
      {
        replacements: [id_suplier],
      }
    );
    return results[0];
  },

  // Menambahkan data suplier
  addSuplier: async (nama_suplier, alamat_suplier, nomor_telepon_suplier) => {
    const result = await sequelize.query(
      `
      INSERT INTO suplier (
        nama_suplier, 
        alamat_suplier, 
        nomor_telepon_suplier
      ) VALUES (?, ?, ?)
    `,
      {
        replacements: [nama_suplier, alamat_suplier, nomor_telepon_suplier],
      }
    );
    return result[0];
  },

  // Mengupdate data suplier
  updateSuplier: async (
    id_suplier,
    nama_suplier,
    alamat_suplier,
    nomor_telepon_suplier
  ) => {
    const result = await sequelize.query(
      `
      UPDATE suplier
      SET 
        nama_suplier = ?, 
        alamat_suplier = ?, 
        nomor_telepon_suplier = ?
      WHERE id_suplier = ?
    `,
      {
        replacements: [
          nama_suplier,
          alamat_suplier,
          nomor_telepon_suplier,
          id_suplier,
        ],
      }
    );
    return result[0];
  },

  // Menghapus data suplier
  deleteSuplier: async (id_suplier) => {
    const result = await sequelize.query(
      `
      DELETE FROM suplier WHERE id_suplier = ?
    `,
      {
        replacements: [id_suplier],
      }
    );
    return result[0];
  },
};

export default Suplier;
