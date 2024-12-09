import Provinsi from "../models/ProvinsiModel.js";

// Mendapatkan semua data provinsi
export const getAllProvinsi = async (req, res) => {
  try {
    const provinsi = await Provinsi.getAllProvinsi();
    res.json({
      status: "success",
      data: provinsi,
      message: "Provinsi fetched successfully.",
    });
  } catch (error) {
    console.error("Error fetching provinsi data:", error);
    res.status(500).json({
      status: "error",
      data: null,
      message: "Internal Server Error",
    });
  }
};

// Mendapatkan data provinsi berdasarkan ID
export const getProvinsiById = async (req, res) => {
  const { id_provinsi } = req.params;
  try {
    const provinsi = await Provinsi.getProvinsiById(id_provinsi);
    if (!provinsi) {
      return res.status(404).json({
        status: "error",
        data: null,
        message: "Provinsi not found.",
      });
    }
    res.json({
      status: "success",
      data: provinsi,
      message: "Provinsi data fetched successfully.",
    });
  } catch (error) {
    console.error("Error fetching provinsi data:", error);
    res.status(500).json({
      status: "error",
      data: null,
      message: "Internal Server Error",
    });
  }
};

// Membuat provinsi baru
export const createProvinsi = async (req, res) => {
  const { kode_provinsi, nama_provinsi } = req.body;

  try {
    await Provinsi.addProvinsi(kode_provinsi, nama_provinsi);

    res.status(201).json({
      status: "success",
      data: { kode_provinsi, nama_provinsi },
      message: "Provinsi created successfully.",
    });
  } catch (error) {
    console.error("Error creating provinsi:", error);
    res.status(500).json({
      status: "error",
      data: null,
      message: "Internal Server Error",
    });
  }
};

// Mengupdate data provinsi
export const updateProvinsi = async (req, res) => {
  const { id_provinsi } = req.params;
  const { kode_provinsi, nama_provinsi } = req.body;

  try {
    await Provinsi.updateProvinsi(id_provinsi, kode_provinsi, nama_provinsi);

    res.json({
      status: "success",
      data: null,
      message: "Provinsi updated successfully.",
    });
  } catch (error) {
    console.error("Error updating provinsi:", error);
    res.status(500).json({
      status: "error",
      data: null,
      message: "Internal Server Error",
    });
  }
};

// Menghapus provinsi berdasarkan ID
export const deleteProvinsi = async (req, res) => {
  const { id_provinsi } = req.params;

  try {
    await Provinsi.deleteProvinsi(id_provinsi);
    res.json({
      status: "success",
      data: null,
      message: "Provinsi deleted successfully.",
    });
  } catch (error) {
    console.error("Error deleting provinsi:", error);
    res.status(500).json({
      status: "error",
      data: null,
      message: "Internal Server Error",
    });
  }
};
