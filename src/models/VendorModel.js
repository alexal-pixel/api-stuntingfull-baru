import sequelize from "../config/config.js";

const Vendor = {
  getAllVendors: async () => {
    const [results] = await sequelize.query("SELECT * FROM vendor_armada");
    return results;
  },

  getVendorById: async (id_vendor) => {
    const [results] = await sequelize.query(
      "SELECT * FROM vendor_armada WHERE id_vendor = ?",
      {
        replacements: [id_vendor],
      }
    );
    return results[0];
  },

  addVendor: async (
    nama_vendor,
    penanggungjawab_vendor,
    telepon_vendor,
    jumlah_armada,
    status_vendor
  ) => {
    const result = await sequelize.query(
      "INSERT INTO vendor_armada (nama_vendor, penanggungjawab_vendor, telepon_vendor, jumlah_armada, status_ventor) VALUES (?, ?, ?, ?, ?)",
      {
        replacements: [
          nama_vendor,
          penanggungjawab_vendor,
          telepon_vendor,
          jumlah_armada,
          status_vendor,
        ],
      }
    );
    return result[0];
  },

  updateVendor: async (
    id_vendor,
    nama_vendor,
    penanggungjawab_vendor,
    telepon_vendor,
    jumlah_armada,
    status_vendor
  ) => {
    const result = await sequelize.query(
      "UPDATE vendor_armada SET nama_vendor = ?, penanggungjawab_vendor = ?, telepon_vendor = ?, jumlah_armada = ?, status_vendor = ? WHERE id_vendor = ?",
      {
        replacements: [
          nama_vendor,
          penanggungjawab_vendor,
          telepon_vendor,
          jumlah_armada,
          status_vendor,
          id_vendor,
        ],
      }
    );
    return result[0];
  },

  deleteVendor: async (id_vendor) => {
    const result = await sequelize.query(
      "DELETE FROM vendor_armada WHERE id_vendor = ?",
      {
        replacements: [id_vendor],
      }
    );
    return result[0];
  },

  getVendorCount: async () => {
    const [results] = await sequelize.query(
      "SELECT COUNT(*) AS count FROM vendor_armada"
    );
    return results[0].count;
  },

  searchVendorByName: async (keyword) => {
    const [results] = await sequelize.query(
      "SELECT * FROM vendor_armada WHERE nama_vendor LIKE :keyword",
      {
        replacements: { keyword: `%${keyword}%` },
        type: sequelize.QueryTypes.SELECT,
      }
    );
    return results;
  },
};

export default Vendor;
