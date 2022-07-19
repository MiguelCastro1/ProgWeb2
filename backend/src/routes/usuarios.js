import express from "express";
import userController from "../controllers/usuarios";

const router = express.Router();

router.get("/", userController.index);
router.post("/", userController.create);
router.get("/:id", userController.read);
router.put("/:id", userController.update);
router.delete("/:id", userController.remove);

export default router;