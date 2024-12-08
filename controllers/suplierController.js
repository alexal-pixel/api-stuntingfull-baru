import Suplier from "../models/SuplierModel.js";

// Mendapatkan semua data suplier
export const getAllSupliers = async (req, res) => {
  try {
    const supliers = await Suplier.getAllSupliers();
    res.json({
      status: "success",
      data: supliers,
      message: "Supliers fetched successfully.",
    });
  } catch (error) {
    console.error("Error fetching supliers data:", error);
    res.status(500).json({
      status: "error",
      data: null,
      message: "Internal Server Error",
    });
  }
};

// Mendapatkan data suplier berdasarkan ID
export const getSuplierById = async (req, res) => {
  const { id_suplier } = req.params;
  try {
    const suplier = await Suplier.getSuplierById(id_suplier);
    if (!suplier) {
      return res.status(404).json({
        status: "error",
        data: null,
        message: "Suplier not found.",
      });
    }
    res.json({
      status: "success",
      data: suplier,
      message: "Suplier data fetched successfully.",
    });
  } catch (error) {
    console.error("Error fetching suplier data:", error);
    res.status(500).json({
      status: "error",
      data: null,
      message: "Internal Server Error",
    });
  }
};

// Membuat suplier baru
export const createSuplier = async (req, res) => {
  const { nama_suplier, alamat_suplier, nomor_telepon_suplier } = req.body;

  try {
    await Suplier.addSuplier(
      nama_suplier,
      alamat_suplier,
      nomor_telepon_suplier
    );
    res.status(201).json({
      status: "success",
      data: { nama_suplier, alamat_suplier, nomor_telepon_suplier },
      message: "Suplier created successfully.",
    });
  } catch (error) {
    console.error("Error creating suplier:", error);
    res.status(500).json({
      status: "error",
      data: null,
      message: "Internal Server Error",
    });
  }
};

// Mengupdate data suplier
export const updateSuplier = async (req, res) => {
  const { id_suplier } = req.params;
  const { nama_suplier, alamat_suplier, nomor_telepon_suplier } = req.body;

  try {
    await Suplier.updateSuplier(
      id_suplier,
      nama_suplier,
      alamat_suplier,
      nomor_telepon_suplier
    );
    res.json({
      status: "success",
      data: null,
      message: "Suplier updated successfully.",
    });
  } catch (error) {
    console.error("Error updating suplier:", error);
    res.status(500).json({
      status: "error",
      data: null,
      message: "Internal Server Error",
    });
  }
};

// Menghapus suplier berdasarkan ID
export const deleteSuplier = async (req, res) => {
  const { id_suplier } = req.params;

  try {
    await Suplier.deleteSuplier(id_suplier);
    res.json({
      status: "success",
      data: null,
      message: "Suplier deleted successfully.",
    });
  } catch (error) {
    console.error("Error deleting suplier:", error);
    res.status(500).json({
      status: "error",
      data: null,
      message: "Internal Server Error",
    });
  }
};
