import express from "express";
import userController from "../controllers/users";

const router = express.Router();

router.get("/", userController.index);
router.post("/", userController.create);
router.get("/user/:id", userController.read);
router.put("/user/:id", userController.update);
router.delete("/user/:id", userController.remove);

export default router;