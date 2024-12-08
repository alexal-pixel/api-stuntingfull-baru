import sequelize from "../config/config.js";

const Armada = {
  // Mendapatkan semua data armada dengan join tabel vendor_armada dan jenis_mobil
  getAllArmadas: async () => {
    const [results] = await sequelize.query(`
      SELECT 
        armada.id_armada, 
        armada.nopol_mobil_armada, 
        armada.status_armada, 
        vendor_armada.nama_vendor, 
        jenis_mobil.nama_jenis_mobil
      FROM armada
      LEFT JOIN vendor_armada ON armada.id_vendor = vendor_armada.id_vendor
      LEFT JOIN jenis_mobil ON armada.id_jenis_mobil = jenis_mobil.id_jenis_mobil
    `);
    return results;
  },

  // Mendapatkan data armada berdasarkan ID dengan join tabel vendor_armada dan jenis_mobil
  getArmadaById: async (id_armada) => {
    const [results] = await sequelize.query(
      `
      SELECT 
        armada.id_armada, 
        armada.nopol_mobil_armada, 
        armada.status_armada, 
        vendor_armada.nama_vendor, 
        jenis_mobil.nama_jenis_mobil
      FROM armada
      LEFT JOIN vendor_armada ON armada.id_vendor = vendor_armada.id_vendor
      LEFT JOIN jenis_mobil ON armada.id_jenis_mobil = jenis_mobil.id_jenis_mobil
      WHERE armada.id_armada = ?
    `,
      {
        replacements: [id_armada],
      }
    );
    return results[0];
  },

  // Menambahkan data armada baru
  addArmada: async (
    id_vendor,
    id_jenis_mobil,
    nopol_mobil_armada,
    status_armada
  ) => {
    const result = await sequelize.query(
      `
      INSERT INTO armada (
        id_vendor, id_jenis_mobil, nopol_mobil_armada, status_armada
      ) VALUES (?, ?, ?, ?)
    `,
      {
        replacements: [
          id_vendor,
          id_jenis_mobil,
          nopol_mobil_armada,
          status_armada,
        ],
      }
    );
    return result[0];
  },

  // Mengupdate data armada
  updateArmada: async (
    id_armada,
    id_vendor,
    id_jenis_mobil,
    nopol_mobil_armada,
    status_armada
  ) => {
    const result = await sequelize.query(
      `
      UPDATE armada
      SET 
        id_vendor = ?, 
        id_jenis_mobil = ?, 
        nopol_mobil_armada = ?, 
        status_armada = ?
      WHERE id_armada = ?
    `,
      {
        replacements: [
          id_vendor,
          id_jenis_mobil,
          nopol_mobil_armada,
          status_armada,
          id_armada,
        ],
      }
    );
    return result[0];
  },

  // Menghapus data armada berdasarkan ID
  deleteArmada: async (id_armada) => {
    const result = await sequelize.query(
      `
      DELETE FROM armada WHERE id_armada = ?
    `,
      {
        replacements: [id_armada],
      }
    );
    return result[0];
  },
};

export default Armada;
