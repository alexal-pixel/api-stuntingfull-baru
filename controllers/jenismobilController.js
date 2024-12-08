import JenisMobil from "../models/JenismobilModel.js";

// Mendapatkan semua data jenis mobil
export const getAllJenisMobil = async (req, res) => {
  try {
    const jenisMobil = await JenisMobil.getAllJenisMobil();
    res.json({
      status: "success",
      data: jenisMobil,
      message: "Jenis mobil fetched successfully.",
    });
  } catch (error) {
    console.error("Error fetching jenis mobil data:", error);
    res.status(500).json({
      status: "error",
      data: null,
      message: "Internal Server Error",
    });
  }
};

// Mendapatkan data jenis mobil berdasarkan ID
export const getJenisMobilById = async (req, res) => {
  const { id_jenis_mobil } = req.params;
  try {
    const jenisMobil = await JenisMobil.getJenisMobilById(id_jenis_mobil);
    if (!jenisMobil) {
      return res.status(404).json({
        status: "error",
        data: null,
        message: "Jenis mobil not found.",
      });
    }
    res.json({
      status: "success",
      data: jenisMobil,
      message: "Jenis mobil data fetched successfully.",
    });
  } catch (error) {
    console.error("Error fetching jenis mobil data:", error);
    res.status(500).json({
      status: "error",
      data: null,
      message: "Internal Server Error",
    });
  }
};

// Membuat jenis mobil baru
export const createJenisMobil = async (req, res) => {
  const { nama_jenis_mobil, keterangan } = req.body;

  try {
    await JenisMobil.addJenisMobil(nama_jenis_mobil, keterangan);
    res.status(201).json({
      status: "success",
      data: { nama_jenis_mobil, keterangan },
      message: "Jenis mobil created successfully.",
    });
  } catch (error) {
    console.error("Error creating jenis mobil:", error);
    res.status(500).json({
      status: "error",
      data: null,
      message: "Internal Server Error",
    });
  }
};

// Mengupdate data jenis mobil
export const updateJenisMobil = async (req, res) => {
  const { id_jenis_mobil } = req.params;
  const { nama_jenis_mobil, keterangan } = req.body;

  try {
    await JenisMobil.updateJenisMobil(
      id_jenis_mobil,
      nama_jenis_mobil,
      keterangan
    );
    res.json({
      status: "success",
      data: null,
      message: "Jenis mobil updated successfully.",
    });
  } catch (error) {
    console.error("Error updating jenis mobil:", error);
    res.status(500).json({
      status: "error",
      data: null,
      message: "Internal Server Error",
    });
  }
};

// Menghapus jenis mobil berdasarkan ID
export const deleteJenisMobil = async (req, res) => {
  const { id_jenis_mobil } = req.params;

  try {
    await JenisMobil.deleteJenisMobil(id_jenis_mobil);
    res.json({
      status: "success",
      data: null,
      message: "Jenis mobil deleted successfully.",
    });
  } catch (error) {
    console.error("Error deleting jenis mobil:", error);
    res.status(500).json({
      status: "error",
      data: null,
      message: "Internal Server Error",
    });
  }
};
