import express from "express";
import * as armadaController from "../controllers/armadaController.js";
import * as authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Route untuk environment production dengan autentikasi dan otorisasi
router.get(
  "/armada",
  authMiddleware.authenticate,
  authMiddleware.authorizeRole(1),
  armadaController.getAllArmada
);
router.get(
  "/armada/:id_armada",
  authMiddleware.authenticate,
  authMiddleware.authorizeRole(1),
  armadaController.getArmadaById
);
router.post(
  "/armada",
  authMiddleware.authenticate,
  authMiddleware.authorizeRole(1),
  armadaController.createArmada
);
router.put(
  "/armada/:id_armada",
  authMiddleware.authenticate,
  authMiddleware.authorizeRole(1),
  armadaController.updateArmada
);
router.delete(
  "/armada/:id_armada",
  authMiddleware.authenticate,
  authMiddleware.authorizeRole(1),
  armadaController.deleteArmada
);

// Route untuk environment development tanpa autentikasi
router.get("/dev/armada", armadaController.getAllArmada);
router.get("/dev/armada/:id_armada", armadaController.getArmadaById);
router.post("/dev/armada", armadaController.createArmada);
router.put("/dev/armada/:id_armada", armadaController.updateArmada);
router.delete("/dev/armada/:id_armada", armadaController.deleteArmada);

export default router;
