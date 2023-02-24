

export type Matrix = Array<Array<number>>

export class MatrixEntity {

  private matrix: Matrix = []

  public setMatrix(rows: Matrix) {
    this.matrix = rows || []
  }

  public getMatrix() {
    return this.matrix
  }

  public validateMatrix(): void {
    const rows = this.matrix.length;
    const cols = this.matrix?.[0]?.length || 0;

    if (rows == 0) throw new Error("Debes proporcionar elementos en tu matriz")
    if (rows !== cols) throw new Error("La matriz debe ser NxN")


    for (let i = 0; i < rows; i++) {
      if (cols !== this.matrix[i].length)
        throw new Error(`La matriz debe contener filas de la misma longitud. Error en la fila ${i} de tu matriz.`)
      for (let j = 0; j < cols; j++) {
        if (!Number(this.matrix[i][j]))
          throw new Error(`El elemento [${i},${j}] = ${this.matrix[i][j]} no es un número.`)
      }
    }
  }
}