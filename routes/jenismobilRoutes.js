import express from "express";
import * as jenisMobilController from "../controllers/jenismobilController.js";
import * as authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Route untuk environment production dengan autentikasi dan otorisasi
router.get(
  "/jenismobil",
  authMiddleware.authenticate,
  authMiddleware.authorizeRole(1),
  jenisMobilController.getAllJenisMobil
);
router.get(
  "/jenismobil/:id_jenis_mobil",
  authMiddleware.authenticate,
  authMiddleware.authorizeRole(1),
  jenisMobilController.getJenisMobilById
);
router.post(
  "/jenismobil",
  authMiddleware.authenticate,
  authMiddleware.authorizeRole(1),
  jenisMobilController.createJenisMobil
);
router.put(
  "/jenismobil/:id_jenis_mobil",
  authMiddleware.authenticate,
  authMiddleware.authorizeRole(1),
  jenisMobilController.updateJenisMobil
);
router.delete(
  "/jenismobil/:id_jenis_mobil",
  authMiddleware.authenticate,
  authMiddleware.authorizeRole(1),
  jenisMobilController.deleteJenisMobil
);

// Route untuk environment development tanpa autentikasi
router.get("/dev/jenismobil", jenisMobilController.getAllJenisMobil);
router.get(
  "/dev/jenismobil/:id_jenis_mobil",
  jenisMobilController.getJenisMobilById
);
router.post("/dev/jenismobil", jenisMobilController.createJenisMobil);
router.put(
  "/dev/jenismobil/:id_jenis_mobil",
  jenisMobilController.updateJenisMobil
);
router.delete(
  "/dev/jenismobil/:id_jenis_mobil",
  jenisMobilController.deleteJenisMobil
);

export default router;
