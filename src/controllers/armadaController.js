import Armada from "../models/ArmadaModel.js";

export const getAllArmadas = async (req, res) => {
  try {
    const armadas = await Armada.getAllArmadas();
    res.json({
      status: "success",
      data: armadas,
      message: "Armadas fetched successfully.",
    });
  } catch (error) {
    console.error("Error fetching Armadas data:", error);
    res.status(500).json({
      status: "error",
      data: null,
      message: "Internal Server Error",
    });
  }
};

export const getArmadaById = async (req, res) => {
  const { id_armada } = req.params;
  try {
    const armadaData = await Armada.getArmadaById(id_armada);
    if (!armadaData) {
      return res.status(404).json({
        status: "error",
        data: null,
        message: "Armada not found.",
      });
    }
    res.json({
      status: "success",
      data: armadaData,
      message: "Armada data fetched successfully.",
    });
  } catch (error) {
    console.error("Error fetching Armada data:", error);
    res.status(500).json({
      status: "error",
      data: null,
      message: "Internal Server Error",
    });
  }
};

export const createArmada = async (req, res) => {
  const { id_vendor, id_jenis_mobil, nopol_mobil_armada, status_armada } =
    req.body;

  try {
    await Armada.addArmada(
      id_vendor,
      id_jenis_mobil,
      nopol_mobil_armada,
      status_armada
    );
    res.status(201).json({
      status: "success",
      data: {
        id_vendor,
        id_jenis_mobil,
        nopol_mobil_armada,
        status_armada,
      },
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

export const updateArmada = async (req, res) => {
  const { id_armada } = req.params;
  const { id_vendor, id_jenis_mobil, nopol_mobil_armada, status_armada } =
    req.body;

  try {
    const result = await Armada.updateArmada(
      id_armada,
      id_vendor,
      id_jenis_mobil,
      nopol_mobil_armada,
      status_armada
    );
    if (result === 0) {
      return res.status(404).json({
        status: "error",
        data: null,
        message: "Armada not found.",
      });
    }
    res.json({
      status: "success",
      data: null,
      message: "Armada updated successfully.",
    });
  } catch (error) {
    console.error("Error updating Armada:", error);
    res.status(500).json({
      status: "error",
      data: null,
      message: "Internal Server Error",
    });
  }
};

export const deleteArmada = async (req, res) => {
  const { id_armada } = req.params;

  try {
    const result = await Armada.deleteArmada(id_armada);
    if (result === 0) {
      return res.status(404).json({
        status: "error",
        data: null,
        message: "Armada not found.",
      });
    }
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

export const getArmadaCount = async (req, res) => {
  try {
    const count = await Armada.getArmadaCount();
    res.json({
      status: "success",
      data: { count },
      message: "Armada count fetched successfully.",
    });
  } catch (error) {
    console.error("Error fetching Armada count:", error);
    res.status(500).json({
      status: "error",
      data: null,
      message: "Internal Server Error",
    });
  }
};

export const searchArmadaByName = async (req, res) => {
  const { nopol_mobil_armada } = req.query;
  try {
    const armadas = await Armada.searchArmadaByName(nopol_mobil_armada);
    const responseData = Array.isArray(armadas) ? armadas : [armadas];
    res.json({
      status: "success",
      data: responseData,
      message: "Armada fetched successfully.",
    });
  } catch (error) {
    console.error("Error fetching Armada data:", error);
    res.status(500).json({
      status: "error",
      data: "",
      message: "Internal Server Error",
    });
  }
};
