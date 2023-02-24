import { Router } from "express";
import { MatrixActions } from "../../application/matrix.actions";
import { MatrixEntity } from "../../domain/matrix.entity";
import { MatrixController } from "../controllers/matrix.controller";

const router = Router()

router.post('/matrix', new MatrixController(new MatrixActions(), new MatrixEntity()).rotateMatrix)

export default router