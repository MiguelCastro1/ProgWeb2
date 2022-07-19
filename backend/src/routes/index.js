import express from "express";
import usersRouter from "./usuarios";
import productsRouter from "./produtos";
import mainRouter from "./main";

const router = express.Router();

router.use('/', mainRouter)
router.use('/usuarios', usersRouter);
router.use('/produtos', productsRouter);


export default router;