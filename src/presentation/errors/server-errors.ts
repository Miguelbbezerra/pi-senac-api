export class ServerError extends Error {
  constructor(error?: Error) {
    super()
    this.name = error.name
    this.message = error.message
    this.stack = error?.stack
  }
}
