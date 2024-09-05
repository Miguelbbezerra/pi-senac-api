export class InvalidParamError extends Error {
  constructor(paramName: string) {
    super()
    this.message = `Parâmetro inválido: ${paramName}`
    this.name = 'InvalidParamError'
  }
}
