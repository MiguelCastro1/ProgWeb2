import express from "express";
import productController from "../controllers/produtos";
import multer from "multer";
import multerConfig from "./multer";

const router = express.Router();

router.get("/", productController.index);
router.post("/", multer(multerConfig).single('file'), productController.create);
router.get("/:id", productController.read);
router.put("/:id", productController.update);
router.delete("/:id", productController.remove);

export default router;