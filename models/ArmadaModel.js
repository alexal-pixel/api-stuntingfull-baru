import sequelize from "../config/config.js";

const Armada = {
  getAllArmadas: async () => {
    const [results] = await sequelize.query("SELECT * FROM armada");
    return results;
  },

  getArmadaById: async (id_armada) => {
    const [results] = await sequelize.query(
      "SELECT * FROM armada WHERE id_armada = ?",
      {
        replacements: [id_armada],
      }
    );
    return results[0];
  },

  addArmada: async (
    id_vendor,
    id_jenis_mobil,
    nopol_mobil_armada,
    status_armada
  ) => {
    const result = await sequelize.query(
      "INSERT INTO armada (id_vendor, id_jenis_mobil, nopol_mobil_armada, status_armada) VALUES (?, ?, ?, ?)",
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

  updateArmada: async (
    id_vendor,
    id_jenis_mobil,
    nopol_mobil_armada,
    status_armada
  ) => {
    const result = await sequelize.query(
      "UPDATE armada SET id_vendor = ?, id_jenis_mobil = ?, nopol_mobil_armada = ?, status_armada = ? WHERE id_armada = ?",
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

  deleteArmada: async (id_armada) => {
    const result = await sequelize.query(
      "DELETE FROM armada WHERE id_armada = ?",
      {
        replacements: [id_armada],
      }
    );
    return result[0];
  },

  getArmadaCount: async () => {
    const [results] = await sequelize.query(
      "SELECT COUNT(*) AS count FROM armada"
    );
    return results[0].count;
  },

  searchArmadaByName: async (keyword) => {
    const [results] = await sequelize.query(
      "SELECT * FROM armada WHERE nopol_mobil_armada LIKE :keyword",
      {
        replacements: { keyword: `%${keyword}%` },
        type: sequelize.QueryTypes.SELECT,
      }
    );
    return results;
  },
};

export default Armada;
