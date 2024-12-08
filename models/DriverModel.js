import sequelize from "../config/config.js";

const Driver = {
  getAllDrivers: async () => {
    const [results] = await sequelize.query(`
        SELECT 
            driver.id_driver,
            driver.nik,
            driver.nama_driver,
            driver.nomor_telepon_driver,
            vendor.id_vendor,
            vendor.nama_vendor
        FROM driver
        LEFT JOIN vendor ON driver.id_vendor = vendor.id_vendor
    `);
    return results;
  },

  getDriverById: async (id_driver) => {
    const [results] = await sequelize.query(
      "SELECT * FROM driver WHERE id_driver = ?",
      {
        replacements: [id_driver],
      }
    );
    return results[0];
  },

  addDriver: async (id_vendor, nama_driver, nomor_telepon_driver) => {
    const result = await sequelize.query(
      `INSERT INTO driver (id_vendor, nama_driver, nomor_telepon_driver) VALUES (?, ?, ?)`,
      {
        replacements: [id_vendor, nama_driver, nomor_telepon_driver],
      }
    );
    return result[0];
  },

  updateDriver: async (id_vendor, nama_driver, nomor_telepon_driver) => {
    const result = await sequelize.query(
      `UPDATE driver SET id_vendor = ?, nama_driver = ?, nomor_telepon_driver = ? WHERE id_driver = ?`,
      {
        replacements: [id_vendor, nama_driver, nomor_telepon_driver],
      }
    );
    return result[0];
  },

  deleteDriver: async (id_driver) => {
    const result = await sequelize.query(
      "DELETE FROM driver WHERE id_driver = ?",
      {
        replacements: [id_driver],
      }
    );
    return result[0];
  },

  getDriverCount: async () => {
    const [results] = await sequelize.query(
      "SELECT COUNT(*) AS count FROM driver"
    );
    return results[0].count;
  },

  searchDriverByName: async (keyword) => {
    const [results] = await sequelize.query(
      `
        SELECT 
            driver.id_driver,
            driver.nik,
            driver.nama_driver,
            driver.nomor_telepon_driver,
            vendor.id_vendor,
            vendor.nama_vendor
        FROM driver
        LEFT JOIN vendor ON driver.id_vendor = vendor.id_vendor
        WHERE driver.nama_nama_driver LIKE :keyword
        `,
      {
        replacements: { keyword: `%${keyword}%` },
        type: sequelize.QueryTypes.SELECT,
      }
    );
    return results;
  },
};

export default Driver;
