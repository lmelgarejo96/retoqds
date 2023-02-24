import { Matrix } from "../domain/matrix.entity";

export class MatrixActions {

  rotateAntiClockwise(matrix: Matrix): Matrix {
    const newMatrix: Matrix = [] // Nueva matríz a retornar
    const rows = matrix.length; // Cantidad filas
    const cols = matrix?.[0]?.length || 0 // Cantidad columnas

    let x: number = 0 // Nuevas filas de la matríz

    for (let j = (cols - 1); j >= 0; j--) { // Recorrer columnas desde la última, hasta la inicial
      for (let i = 0; i < rows; i++) { // Recorrer filas desde el inicio hasta la última
        if (!newMatrix[x]) { // Si no hay una fila, se añade
          newMatrix[x] = []
        }
        newMatrix[x].push(matrix[i][j]) // Se agrega en forma de fila una columna, eso es un giro antihorario de 90%
      }
      x++ // Se incrementa para pasar a una nueva fila de la nueva matríz
    }

    return newMatrix
  }

}