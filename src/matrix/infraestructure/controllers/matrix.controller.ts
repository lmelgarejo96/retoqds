import { NextFunction, Request, Response } from "express"
import { MatrixActions } from "../../application/matrix.actions"
import { MatrixEntity } from "../../domain/matrix.entity";

export class MatrixController {

  static matrixActions : MatrixActions;
  static matrixEntity : MatrixEntity;

  constructor(matrixActions: MatrixActions, matrixEntity: MatrixEntity) {
    MatrixController.matrixActions = matrixActions
    MatrixController.matrixEntity = matrixEntity

    console.log(matrixActions, matrixEntity);
  }

  public rotateMatrix (request: Request, response: Response, next: NextFunction) {
    try {
      const reqMatrix = request.body;

      MatrixController.matrixEntity.setMatrix(reqMatrix)
      MatrixController.matrixEntity.validateMatrix()

      const newMatrix = MatrixController.matrixActions.rotateAntiClockwise(MatrixController.matrixEntity.getMatrix())

      response.status(200).json({
        success: true,
        data: newMatrix,
        message: 'Se ejecutó correctamente'
      })
    } catch (error: any) {
      response.status(400).json({
        success: false,
        data: null,
        message: error?.message
      })
    }
  }

}