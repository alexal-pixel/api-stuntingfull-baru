import sequelize from "../config/config.js";

const Driver = {
  // Mendapatkan semua data driver dengan join tabel users dan vendor_armada
  getAllDrivers: async () => {
    const [results] = await sequelize.query(`
      SELECT 
        driver.id_driver, 
        driver.nama_driver, 
        driver.nomor_telepon_driver, 
        users.username AS user_username, 
        vendor_armada.nama_vendor
      FROM driver
      LEFT JOIN users ON driver.id_user = users.id_user
      LEFT JOIN vendor_armada ON driver.id_vendor = vendor_armada.id_vendor
    `);
    return results;
  },

  // Mendapatkan data driver berdasarkan ID dengan join tabel users dan vendor_armada
  getDriverById: async (id_driver) => {
    const [results] = await sequelize.query(
      `
      SELECT 
        driver.id_driver, 
        driver.nama_driver, 
        driver.nomor_telepon_driver, 
        users.username AS user_username, 
        users.nama_user AS user_nama, 
        vendor_armada.nama_vendor
      FROM driver
      LEFT JOIN users ON driver.id_user = users.id_user
      LEFT JOIN vendor_armada ON drivers.id_vendor = vendor_armada.id_vendor
      WHERE driver.id_driver = ?
    `,
      {
        replacements: [id_driver],
      }
    );
    return results[0];
  },

  // Menambahkan data driver
  addDriver: async (id_user, id_vendor, nama_driver, nomor_telepon_driver) => {
    const result = await sequelize.query(
      `
      INSERT INTO driver (id_user, id_vendor, nama_driver, nomor_telepon_driver)
      VALUES (?, ?, ?, ?)
    `,
      {
        replacements: [id_user, id_vendor, nama_driver, nomor_telepon_driver],
      }
    );
    return result[0];
  },

  // Mengupdate data driver
  updateDriver: async (
    id_driver,
    id_user,
    id_vendor,
    nama_driver,
    nomor_telepon_driver
  ) => {
    const result = await sequelize.query(
      `
      UPDATE driver
      SET 
        id_user = ?, 
        id_vendor = ?, 
        nama_driver = ?, 
        nomor_telepon_driver = ?
      WHERE id_driver = ?
    `,
      {
        replacements: [
          id_user,
          id_vendor,
          nama_driver,
          nomor_telepon_driver,
          id_driver,
        ],
      }
    );
    return result[0];
  },

  // Menghapus data driver
  deleteDriver: async (id_driver) => {
    const result = await sequelize.query(
      `
      DELETE FROM driver WHERE id_driver = ?
    `,
      {
        replacements: [id_driver],
      }
    );
    return result[0];
  },
};

export default Driver;
