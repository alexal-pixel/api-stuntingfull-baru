import express from "express";
import * as armadaController from "../controllers/armadaController.js";
import * as authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Routes for vendor with authentication and authorization middleware
router.get(
  "/armada",
  authMiddleware.authenticate,
  authMiddleware.authorizeRole(1),
  armadaController.getAllArmadas
);
router.get(
  "/armada/count",
  authMiddleware.authenticate,
  authMiddleware.authorizeRole(1),
  armadaController.getArmadaCount
);
router.get(
  "/armada/search",
  authMiddleware.authenticate,
  authMiddleware.authorizeRole(1),
  armadaController.searchArmadaByName
);
router.get(
  "/armada/:id_armada",
  authMiddleware.authenticate,
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

// Development routes for vendor without middleware (for testing purposes)
router.get("/dev/armada", armadaController.getAllArmadas);
router.get("/dev/armada/search", armadaController.searchArmadaByName);
router.get("/dev/armada/count", armadaController.getArmadaCount);
router.get("/dev/armada/:id_armada", armadaController.getArmadaById);
router.post("/dev/armada", armadaController.createArmada);
router.put("/dev/armada/:id_armada", armadaController.updateArmada);
router.delete("/dev/armada/:id_armada", armadaController.deleteArmada);

export default router;
