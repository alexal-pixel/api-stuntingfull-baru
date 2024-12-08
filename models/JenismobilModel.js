import sequelize from "../config/config.js";

const JenisMobil = {
  // Mendapatkan semua data jenis mobil
  getAllJenisMobil: async () => {
    const [results] = await sequelize.query(`
      SELECT 
        id_jenis_mobil, 
        nama_jenis_mobil, 
        keterangan
      FROM jenis_mobil
    `);
    return results;
  },

  // Mendapatkan data jenis mobil berdasarkan ID
  getJenisMobilById: async (id_jenis_mobil) => {
    const [results] = await sequelize.query(
      `
      SELECT 
        id_jenis_mobil, 
        nama_jenis_mobil, 
        keterangan
      FROM jenis_mobil
      WHERE id_jenis_mobil = ?
      `,
      {
        replacements: [id_jenis_mobil],
      }
    );
    return results[0];
  },

  // Menambahkan data jenis mobil
  addJenisMobil: async (nama_jenis_mobil, keterangan) => {
    const result = await sequelize.query(
      `
      INSERT INTO jenis_mobil (
        nama_jenis_mobil, 
        keterangan
      ) VALUES (?, ?)
      `,
      {
        replacements: [nama_jenis_mobil, keterangan],
      }
    );
    return result[0];
  },

  // Mengupdate data jenis mobil
  updateJenisMobil: async (id_jenis_mobil, nama_jenis_mobil, keterangan) => {
    const result = await sequelize.query(
      `
      UPDATE jenis_mobil
      SET 
        nama_jenis_mobil = ?, 
        keterangan = ?
      WHERE id_jenis_mobil = ?
      `,
      {
        replacements: [nama_jenis_mobil, keterangan, id_jenis_mobil],
      }
    );
    return result[0];
  },

  // Menghapus data jenis mobil
  deleteJenisMobil: async (id_jenis_mobil) => {
    const result = await sequelize.query(
      `
      DELETE FROM jenis_mobil WHERE id_jenis_mobil = ?
      `,
      {
        replacements: [id_jenis_mobil],
      }
    );
    return result[0];
  },
};

export default JenisMobil;
