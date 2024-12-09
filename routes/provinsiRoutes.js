import express from "express";
import * as provinsiController from "../controllers/provinsiController.js";
import * as authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Route untuk environment production dengan autentikasi dan otorisasi
router.get(
  "/provinsi",
  authMiddleware.authenticate,
  authMiddleware.authorizeRole(1),
  provinsiController.getAllProvinsi
);
router.get(
  "/provinsi/:id_provinsi",
  authMiddleware.authenticate,
  authMiddleware.authorizeRole(1),
  provinsiController.getProvinsiById
);
router.post(
  "/provinsi",
  authMiddleware.authenticate,
  authMiddleware.authorizeRole(1),
  provinsiController.createProvinsi
);
router.put(
  "/provinsi/:id_provinsi",
  authMiddleware.authenticate,
  authMiddleware.authorizeRole(1),
  provinsiController.updateProvinsi
);
router.delete(
  "/provinsi/:id_provinsi",
  authMiddleware.authenticate,
  authMiddleware.authorizeRole(1),
  provinsiController.deleteProvinsi
);

// Route untuk environment development tanpa autentikasi
router.get("/dev/provinsi", provinsiController.getAllProvinsi);
router.get("/dev/provinsi/:id_provinsi", provinsiController.getProvinsiById);
router.post("/dev/provinsi", provinsiController.createProvinsi);
router.put("/dev/provinsi/:id_provinsi", provinsiController.updateProvinsi);
router.delete("/dev/provinsi/:id_provinsi", provinsiController.deleteProvinsi);

export default router;
