import Driver from "../models/DriverModel.js";

// Mendapatkan semua data driver
export const getAllDrivers = async (req, res) => {
  try {
    const drivers = await Driver.getAllDrivers();
    res.json({
      status: "success",
      data: drivers,
      message: "Drivers fetched successfully.",
    });
  } catch (error) {
    console.error("Error fetching drivers data:", error);
    res.status(500).json({
      status: "error",
      data: null,
      message: "Internal Server Error",
    });
  }
};

// Mendapatkan data driver berdasarkan ID
export const getDriverById = async (req, res) => {
  const { id_driver } = req.params;
  try {
    const driver = await Driver.getDriverById(id_driver);
    if (!driver) {
      return res.status(404).json({
        status: "error",
        data: null,
        message: "Driver not found.",
      });
    }
    res.json({
      status: "success",
      data: driver,
      message: "Driver data fetched successfully.",
    });
  } catch (error) {
    console.error("Error fetching driver data:", error);
    res.status(500).json({
      status: "error",
      data: null,
      message: "Internal Server Error",
    });
  }
};

// Membuat driver baru
export const createDriver = async (req, res) => {
  const { id_user, id_vendor, nama_driver, nomor_telepon_driver } = req.body;

  try {
    await Driver.addDriver(
      id_user,
      id_vendor,
      nama_driver,
      nomor_telepon_driver
    );

    res.status(201).json({
      status: "success",
      data: { nama_driver, nomor_telepon_driver },
      message: "Driver created successfully.",
    });
  } catch (error) {
    console.error("Error creating driver:", error);
    res.status(500).json({
      status: "error",
      data: null,
      message: "Internal Server Error",
    });
  }
};

// Mengupdate data driver
export const updateDriver = async (req, res) => {
  const { id_driver } = req.params;
  const { id_user, id_vendor, nama_driver, nomor_telepon_driver } = req.body;

  try {
    await Driver.updateDriver(
      id_driver,
      id_user,
      id_vendor,
      nama_driver,
      nomor_telepon_driver
    );

    res.json({
      status: "success",
      data: null,
      message: "Driver updated successfully.",
    });
  } catch (error) {
    console.error("Error updating driver:", error);
    res.status(500).json({
      status: "error",
      data: null,
      message: "Internal Server Error",
    });
  }
};

// Menghapus driver berdasarkan ID
export const deleteDriver = async (req, res) => {
  const { id_driver } = req.params;

  try {
    await Driver.deleteDriver(id_driver);
    res.json({
      status: "success",
      data: null,
      message: "Driver deleted successfully.",
    });
  } catch (error) {
    console.error("Error deleting driver:", error);
    res.status(500).json({
      status: "error",
      data: null,
      message: "Internal Server Error",
    });
  }
};
