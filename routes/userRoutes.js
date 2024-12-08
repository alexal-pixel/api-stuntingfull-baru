import express from "express";
import * as userController from "../controllers/userController.js";
import * as authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Route untuk environment production dengan autentikasi dan otorisasi
router.get(
  "/user",
  authMiddleware.authenticate,
  authMiddleware.authorizeRole(1),
  userController.getAllUsers
);
router.get(
  "/user/:id_user",
  authMiddleware.authenticate,
  authMiddleware.authorizeRole(1),
  userController.getUserById
);
router.post(
  "/user",
  authMiddleware.authenticate,
  authMiddleware.authorizeRole(1),
  userController.createUser
);
router.put(
  "/user/:id_user",
  authMiddleware.authenticate,
  authMiddleware.authorizeRole(1),
  userController.updateUser
);
router.delete(
  "/user/:id_user",
  authMiddleware.authenticate,
  authMiddleware.authorizeRole(1),
  userController.deleteUser
);

// Route untuk environment development tanpa autentikasi
router.get("/dev/user", userController.getAllUsers);
router.get("/dev/user/:id_user", userController.getUserById);
router.post("/dev/user", userController.createUser);
router.put("/dev/user/:id_user", userController.updateUser);
router.delete("/dev/user/:id_user", userController.deleteUser);

export default router;
