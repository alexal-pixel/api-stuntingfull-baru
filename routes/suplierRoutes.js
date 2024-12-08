import express from "express";
import * as suplierController from "../controllers/suplierController.js";
import * as authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Route untuk environment production dengan autentikasi dan otorisasi
router.get(
  "/suplier",
  authMiddleware.authenticate,
  authMiddleware.authorizeRole(1),
  suplierController.getAllSupliers
);
router.get(
  "/suplier/:id_suplier",
  authMiddleware.authenticate,
  authMiddleware.authorizeRole(1),
  suplierController.getSuplierById
);
router.post(
  "/suplier",
  authMiddleware.authenticate,
  authMiddleware.authorizeRole(1),
  suplierController.createSuplier
);
router.put(
  "/suplier/:id_suplier",
  authMiddleware.authenticate,
  authMiddleware.authorizeRole(1),
  suplierController.updateSuplier
);
router.delete(
  "/suplier/:id_suplier",
  authMiddleware.authenticate,
  authMiddleware.authorizeRole(1),
  suplierController.deleteSuplier
);

// Route untuk environment development tanpa autentikasi
router.get("/dev/suplier", suplierController.getAllSupliers);
router.get("/dev/suplier/:id_suplier", suplierController.getSuplierById);
router.post("/dev/suplier", suplierController.createSuplier);
router.put("/dev/suplier/:id_suplier", suplierController.updateSuplier);
router.delete("/dev/suplier/:id_suplier", suplierController.deleteSuplier);

export default router;
