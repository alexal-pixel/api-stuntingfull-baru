import express from "express";
import * as vendorController from "../controllers/vendorController.js";
import * as authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Route untuk environment production dengan autentikasi dan otorisasi
router.get(
  "/vendor",
  authMiddleware.authenticate,
  authMiddleware.authorizeRole(1),
  vendorController.getAllVendors
);
router.get(
  "/vendor/:id_vendor",
  authMiddleware.authenticate,
  authMiddleware.authorizeRole(1),
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

// Route untuk environment development tanpa autentikasi
router.get("/dev/vendor", vendorController.getAllVendors);
router.get("/dev/vendor/:id_vendor", vendorController.getVendorById);
router.post("/dev/vendor", vendorController.createVendor);
router.put("/dev/vendor/:id_vendor", vendorController.updateVendor);
router.delete("/dev/vendor/:id_vendor", vendorController.deleteVendor);

export default router;
