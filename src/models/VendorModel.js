import sequelize from "../config/config.js";

const Vendor = {
  // Mendapatkan semua data vendor
  getAllVendors: async () => {
    const [results] = await sequelize.query(`
      SELECT 
        id_vendor, 
        nama_vendor, 
        penanggungjawab_vendor, 
        jumlah_armada, 
        status_vendor
      FROM vendor_armada
    `);
    return results;
  },

  // Mendapatkan data vendor berdasarkan ID
  getVendorById: async (id_vendor) => {
    const [results] = await sequelize.query(
      `
      SELECT 
        id_vendor, 
        nama_vendor, 
        penanggungjawab_vendor, 
        jumlah_armada, 
        status_vendor
      FROM vendor_armada
      WHERE id_vendor = ?
    `,
      {
        replacements: [id_vendor],
      }
    );
    return results[0];
  },

  // Menambahkan data vendor
  addVendor: async (
    nama_vendor,
    penanggungjawab_vendor,
    jumlah_armada,
    status_vendor
  ) => {
    const result = await sequelize.query(
      `
      INSERT INTO vendor_armada (
        nama_vendor, 
        penanggungjawab_vendor, 
        jumlah_armada, 
        status_vendor
      ) VALUES (?, ?, ?, ?)
    `,
      {
        replacements: [
          nama_vendor,
          penanggungjawab_vendor,
          jumlah_armada,
          status_vendor,
        ],
      }
    );
    return result[0];
  },

  // Mengupdate data vendor
  updateVendor: async (
    id_vendor,
    nama_vendor,
    penanggungjawab_vendor,
    jumlah_armada,
    status_vendor
  ) => {
    const result = await sequelize.query(
      `
      UPDATE vendor_armada
      SET 
        nama_vendor = ?, 
        penanggungjawab_vendor = ?, 
        jumlah_armada = ?, 
        status_vendor = ?
      WHERE id_vendor = ?
    `,
      {
        replacements: [
          nama_vendor,
          penanggungjawab_vendor,
          jumlah_armada,
          status_vendor,
          id_vendor,
        ],
      }
    );
    return result[0];
  },

  // Menghapus data vendor
  deleteVendor: async (id_vendor) => {
    const result = await sequelize.query(
      `
      DELETE FROM vendor_armada WHERE id_vendor = ?
    `,
      {
        replacements: [id_vendor],
      }
    );
    return result[0];
  },
};

export default Vendor;
