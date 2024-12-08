import sequelize from "../config/config.js";

const Hakakses = {
  getAllRoles: async () => {
    const [results] = await sequelize.query("SELECT * FROM hak_akses");
    return results;
  },

  addRole: async (deskripsi_hak_akses) => {
    const result = await sequelize.query(
      "INSERT INTO hak_akses (deskripsi_hak_akses) VALUES (?, ?)",
      {
        replacements: [deskripsi_hak_akses],
      }
    );
    return result[0];
  },

  updateRole: async (id_hak_akses, deskripsi_hak_akses) => {
    const result = await sequelize.query(
      "UPDATE hak_akses SET deskripsi_hak_akses = ? WHERE id_hak_akses = ?",
      {
        replacements: [deskripsi_hak_akses, id_hak_akses],
      }
    );
    return result[0];
  },

  deleteRole: async (id_role) => {
    const result = await sequelize.query(
      "DELETE FROM hak_akses WHERE id_hak_akses = ?",
      {
        replacements: [id_hak_akses],
      }
    );
    return result[0];
  },
};

export default Hakakses;
