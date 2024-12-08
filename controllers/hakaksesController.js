import Role from "../models/HakaksesModel.js";

export const getAllRoles = async (req, res) => {
  try {
    const roles = await Role.getAllRoles();
    res.status(200).json({
      status: "success",
      data: roles,
      message: "Roles retrieved successfully.",
    });
  } catch (error) {
    console.error("Error fetching roles:", error);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

export const createRole = async (req, res) => {
  const { dekripsi_hak_akses } = req.body;

  try {
    const result = await Role.addRole(dekripsi_hak_akses);
    res.status(201).json({
      status: "success",
      data: { id: result.insertId, dekripsi_hak_akses },
      message: "Role created successfully.",
    });
  } catch (error) {
    console.error("Error creating role:", error);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

export const updateRole = async (req, res) => {
  const { id_hak_akses } = req.params;
  const { dekripsi_hak_akses } = req.body;

  try {
    await Role.updateRole(id_hak_akses, dekripsi_hak_akses);
    res.status(200).json({
      status: "success",
      message: "Role updated successfully.",
    });
  } catch (error) {
    console.error("Error updating role:", error);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

export const deleteRole = async (req, res) => {
  const { id_hak_akses } = req.params;

  try {
    await Role.deleteRole(id_hak_akses);
    res.status(200).json({
      status: "success",
      message: "Role deleted successfully.",
    });
  } catch (error) {
    console.error("Error deleting role:", error);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};
