import Vendor from "../models/VendorModel.js";

// Mendapatkan semua data vendor
export const getAllVendors = async (req, res) => {
  try {
    const vendors = await Vendor.getAllVendors();
    res.json({
      status: "success",
      data: vendors,
      message: "Vendors fetched successfully.",
    });
  } catch (error) {
    console.error("Error fetching vendors data:", error);
    res.status(500).json({
      status: "error",
      data: null,
      message: "Internal Server Error",
    });
  }
};

// Mendapatkan data vendor berdasarkan ID
export const getVendorById = async (req, res) => {
  const { id_vendor } = req.params;
  try {
    const vendor = await Vendor.getVendorById(id_vendor);
    if (!vendor) {
      return res.status(404).json({
        status: "error",
        data: null,
        message: "Vendor not found.",
      });
    }
    res.json({
      status: "success",
      data: vendor,
      message: "Vendor data fetched successfully.",
    });
  } catch (error) {
    console.error("Error fetching vendor data:", error);
    res.status(500).json({
      status: "error",
      data: null,
      message: "Internal Server Error",
    });
  }
};

// Membuat vendor baru
export const createVendor = async (req, res) => {
  const { nama_vendor, penanggungjawab_vendor, jumlah_armada, status_vendor } =
    req.body;

  try {
    await Vendor.addVendor(
      nama_vendor,
      penanggungjawab_vendor,
      jumlah_armada,
      status_vendor
    );

    res.status(201).json({
      status: "success",
      data: { nama_vendor, penanggungjawab_vendor, jumlah_armada },
      message: "Vendor created successfully.",
    });
  } catch (error) {
    console.error("Error creating vendor:", error);
    res.status(500).json({
      status: "error",
      data: null,
      message: "Internal Server Error",
    });
  }
};

// Mengupdate data vendor
export const updateVendor = async (req, res) => {
  const { id_vendor } = req.params;
  const { nama_vendor, penanggungjawab_vendor, jumlah_armada, status_vendor } =
    req.body;

  try {
    await Vendor.updateVendor(
      id_vendor,
      nama_vendor,
      penanggungjawab_vendor,
      jumlah_armada,
      status_vendor
    );

    res.json({
      status: "success",
      data: null,
      message: "Vendor updated successfully.",
    });
  } catch (error) {
    console.error("Error updating vendor:", error);
    res.status(500).json({
      status: "error",
      data: null,
      message: "Internal Server Error",
    });
  }
};

// Menghapus vendor berdasarkan ID
export const deleteVendor = async (req, res) => {
  const { id_vendor } = req.params;

  try {
    await Vendor.deleteVendor(id_vendor);
    res.json({
      status: "success",
      data: null,
      message: "Vendor deleted successfully.",
    });
  } catch (error) {
    console.error("Error deleting vendor:", error);
    res.status(500).json({
      status: "error",
      data: null,
      message: "Internal Server Error",
    });
  }
};
