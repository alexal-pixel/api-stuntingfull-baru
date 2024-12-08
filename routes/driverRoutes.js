import express from "express";
import * as driverController from "../controllers/driverController.js";
import * as authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Route untuk environment production dengan autentikasi dan otorisasi
router.get(
  "/driver",
  authMiddleware.authenticate,
  authMiddleware.authorizeRole(1),
  driverController.getAllDrivers
);
router.get(
  "/driver/:id_driver",
  authMiddleware.authenticate,
  authMiddleware.authorizeRole(1),
  driverController.getDriverById
);
router.post(
  "/driver",
  authMiddleware.authenticate,
  authMiddleware.authorizeRole(1),
  driverController.createDriver
);
router.put(
  "/driver/:id_driver",
  authMiddleware.authenticate,
  authMiddleware.authorizeRole(1),
  driverController.updateDriver
);
router.delete(
  "/driver/:id_driver",
  authMiddleware.authenticate,
  authMiddleware.authorizeRole(1),
  driverController.deleteDriver
);

// Route untuk environment development tanpa autentikasi
router.get("/dev/driver", driverController.getAllDrivers);
router.get("/dev/driver/:id_driver", driverController.getDriverById);
router.post("/dev/driver", driverController.createDriver);
router.put("/dev/driver/:id_driver", driverController.updateDriver);
router.delete("/dev/driver/:id_driver", driverController.deleteDriver);

export default router;
