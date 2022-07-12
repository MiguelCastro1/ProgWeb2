import express from "express";
import usersRouter from "./users";
import productsRouter from "./products";
import mainRouter from "./main";

const router = express.Router();

router.use('/', mainRouter)
router.use('/usuarios', usersRouter);
router.use('/products', productsRouter);

export default router;