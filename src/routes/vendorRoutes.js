import express from "express";
import * as vendorController from "../controllers/vendorController.js";
import * as authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Routes for vendor with authentication and authorization middleware
router.get(
  "/vendor",
  authMiddleware.authenticate,
  authMiddleware.authorizeRole(1),
  vendorController.getAllVendors
);
router.get(
  "/vendor/count",
  authMiddleware.authenticate,
  authMiddleware.authorizeRole(1),
  vendorController.getVendorCount
);
router.get(
  "/vendor/search",
  authMiddleware.authenticate,
  authMiddleware.authorizeRole(1),
  vendorController.getVendorCount
);
router.get(
  "/vendor/:id_vendor",
  authMiddleware.authenticate,
  vendorController.getVendorById
);
router.post(
  "/vendor",
  authMiddleware.authenticate,
  authMiddleware.authorizeRole(1),
  vendorController.createVendor
);
router.put(
  "/vendor/:id_vendor",
  authMiddleware.authenticate,
  authMiddleware.authorizeRole(1),
  vendorController.updateVendor
);
router.delete(
  "/vendor/:id_vendor",
  authMiddleware.authenticate,
  authMiddleware.authorizeRole(1),
  vendorController.deleteVendor
);

// Development routes for vendor without middleware (for testing purposes)
router.get("/dev/vendor", vendorController.getAllVendors);
router.get("/dev/vendor/search", vendorController.searchVendorByName);
router.get("/dev/vendor/count", vendorController.getVendorCount);
router.get("/dev/vendor/:id_vendor", vendorController.getVendorById);
router.post("/dev/vendor", vendorController.createVendor);
router.put("/dev/vendor/:id_vendor", vendorController.updateVendor);
router.delete("/dev/vendor/:id_vendor", vendorController.deleteVendor);

export default router;
