import express from "express";
import productController from "../controllers/produtos";
const router = express.Router();

router.get("/", productController.index);
router.post("/", productController.create);
router.get("/:id", productController.read);
router.put("/:id", productController.update);
router.delete("/:id", productController.remove);

export default router;