import express from "express";
import * as kantorController from "../controllers/kantorController.js";
import * as authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Route untuk environment production dengan autentikasi dan otorisasi
router.get(
  "/kantor",
  authMiddleware.authenticate,
  authMiddleware.authorizeRole(1),
  kantorController.getAllKantor
);
router.get(
  "/kantor/:id_kantor",
  authMiddleware.authenticate,
  authMiddleware.authorizeRole(1),
  kantorController.getKantorById
);
router.post(
  "/kantor",
  authMiddleware.authenticate,
  authMiddleware.authorizeRole(1),
  kantorController.createKantor
);
router.put(
  "/kantor/:id_kantor",
  authMiddleware.authenticate,
  authMiddleware.authorizeRole(1),
  kantorController.updateKantor
);
router.delete(
  "/kantor/:id_kantor",
  authMiddleware.authenticate,
  authMiddleware.authorizeRole(1),
  kantorController.deleteKantor
);

// Route untuk environment development tanpa autentikasi
router.get("/dev/kantor", kantorController.getAllKantor);
router.get("/dev/kantor/:id_kantor", kantorController.getKantorById);
router.post("/dev/kantor", kantorController.createKantor);
router.put("/dev/kantor/:id_kantor", kantorController.updateKantor);
router.delete("/dev/kantor/:id_kantor", kantorController.deleteKantor);

export default router;
