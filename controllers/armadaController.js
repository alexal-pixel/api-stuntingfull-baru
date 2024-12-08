import Armada from "../models/ArmadaModel.js";

// Mendapatkan semua data armada
export const getAllArmadas = async (req, res) => {
  try {
    const armadas = await Armada.getAllArmadas();
    res.json({
      status: "success",
      data: armadas,
      message: "Armadas fetched successfully.",
    });
  } catch (error) {
    console.error("Error fetching armada data:", error);
    res.status(500).json({
      status: "error",
      data: null,
      message: "Internal Server Error",
    });
  }
};

// Mendapatkan data armada berdasarkan ID
export const getArmadaById = async (req, res) => {
  const { id_armada } = req.params;
  try {
    const armada = await Armada.getArmadaById(id_armada);
    if (!armada) {
      return res.status(404).json({
        status: "error",
        data: null,
        message: "Armada not found.",
      });
    }
    res.json({
      status: "success",
      data: armada,
      message: "Armada data fetched successfully.",
    });
  } catch (error) {
    console.error("Error fetching armada data:", error);
    res.status(500).json({
      status: "error",
      data: null,
      message: "Internal Server Error",
    });
  }
};

// Membuat armada baru
export const createArmada = async (req, res) => {
  const { id_vendor, id_jenis_mobil, nopol_mobil_armada, status_armada } =
    req.body;

  console.log("id vendor:", id_vendor);
  console.log("id jenis mobil:", id_jenis_mobil);
  console.log("nopol :", nopol_mobil_armada);
  console.log("Status :", status_armada);

  try {
    await Armada.addArmada(
      id_vendor,
      id_jenis_mobil,
      nopol_mobil_armada,
      status_armada
    );
    res.status(201).json({
      status: "success",
      data: { id_vendor, id_jenis_mobil, nopol_mobil_armada, status_armada },
      message: "Armada created successfully.",
    });
  } catch (error) {
    console.error("Error creating armada:", error);
    res.status(500).json({
      status: "error",
      data: null,
      message: "Internal Server Error",
    });
  }
};

// Mengupdate data armada
export const updateArmada = async (req, res) => {
  const { id_armada } = req.params;
  const { id_vendor, id_jenis_mobil, nopol_mobil_armada, status_armada } =
    req.body;

  try {
    await Armada.updateArmada(
      id_armada,
      id_vendor,
      id_jenis_mobil,
      nopol_mobil_armada,
      status_armada
    );
    res.json({
      status: "success",
      data: null,
      message: "Armada updated successfully.",
    });
  } catch (error) {
    console.error("Error updating armada:", error);
    res.status(500).json({
      status: "error",
      data: null,
      message: "Internal Server Error",
    });
  }
};

// Menghapus armada berdasarkan ID
export const deleteArmada = async (req, res) => {
  const { id_armada } = req.params;

  try {
    await Armada.deleteArmada(id_armada);
    res.json({
      status: "success",
      data: null,
      message: "Armada deleted successfully.",
    });
  } catch (error) {
    console.error("Error deleting armada:", error);
    res.status(500).json({
      status: "error",
      data: null,
      message: "Internal Server Error",
    });
  }
};
