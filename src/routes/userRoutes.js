import express from "express";
import * as userController from "../controllers/userController.js";
import * as authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get(
  "/user",
  authMiddleware.authenticate,
  authMiddleware.authorizeRole(1),
  userController.getAllUsers
);
router.get("/user/:id_user", userController.getUserData);
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

router.get("/dev/user", userController.getAllUsers);
router.get("/dev/user/:id_user", userController.getUserData);
router.post("/dev/user", userController.createUser);
router.put("/dev/user/:id_user", userController.updateUser);
router.delete("/dev/user/:id_user", userController.deleteUser);

export default router;
