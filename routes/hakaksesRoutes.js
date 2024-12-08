// routes/roleRoutes.js
import express from "express";
import * as hakaksesController from "../controllers/hakaksesController.js";

const router = express.Router();

router.get("/role", hakaksesController.getAllRoles);
router.post("/role", hakaksesController.createRole);
router.put("/role/:id_hak_akses", hakaksesController.updateRole);
router.delete("/role/:id_hak_akses", hakaksesController.deleteRole);

export default router;
