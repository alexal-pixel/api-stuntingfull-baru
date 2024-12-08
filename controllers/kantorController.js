import Kantor from "../models/KantorModel.js";

// Mendapatkan semua data kantor
export const getAllKantor = async (req, res) => {
  try {
    const kantor = await Kantor.getAllKantor();
    res.json({
      status: "success",
      data: kantor,
      message: "Kantor fetched successfully.",
    });
  } catch (error) {
    console.error("Error fetching kantor data:", error);
    res.status(500).json({
      status: "error",
      data: null,
      message: "Internal Server Error",
    });
  }
};

// Mendapatkan data kantor berdasarkan ID
export const getKantorById = async (req, res) => {
  const { id_kantor } = req.params;
  try {
    const kantor = await Kantor.getKantorById(id_kantor);
    if (!kantor) {
      return res.status(404).json({
        status: "error",
        data: null,
        message: "Kantor not found.",
      });
    }
    res.json({
      status: "success",
      data: kantor,
      message: "Kantor data fetched successfully.",
    });
  } catch (error) {
    console.error("Error fetching kantor data:", error);
    res.status(500).json({
      status: "error",
      data: null,
      message: "Internal Server Error",
    });
  }
};

// Membuat kantor baru
export const createKantor = async (req, res) => {
  const { nama_kantor, kode_kantor, alamat_kantor } = req.body;

  try {
    await Kantor.addKantor(nama_kantor, kode_kantor, alamat_kantor);
    res.status(201).json({
      status: "success",
      data: { nama_kantor, kode_kantor },
      message: "Kantor created successfully.",
    });
  } catch (error) {
    console.error("Error creating kantor:", error);
    res.status(500).json({
      status: "error",
      data: null,
      message: "Internal Server Error",
    });
  }
};

// Mengupdate data kantor
export const updateKantor = async (req, res) => {
  const { id_kantor } = req.params;
  const { nama_kantor, kode_kantor, alamat_kantor } = req.body;

  try {
    await Kantor.updateKantor(
      id_kantor,
      nama_kantor,
      kode_kantor,
      alamat_kantor
    );
    res.json({
      status: "success",
      data: null,
      message: "Kantor updated successfully.",
    });
  } catch (error) {
    console.error("Error updating kantor:", error);
    res.status(500).json({
      status: "error",
      data: null,
      message: "Internal Server Error",
    });
  }
};

// Menghapus kantor berdasarkan ID
export const deleteKantor = async (req, res) => {
  const { id_kantor } = req.params;

  try {
    await Kantor.deleteKantor(id_kantor);
    res.json({
      status: "success",
      data: null,
      message: "Kantor deleted successfully.",
    });
  } catch (error) {
    console.error("Error deleting kantor:", error);
    res.status(500).json({
      status: "error",
      data: null,
      message: "Internal Server Error",
    });
  }
};
