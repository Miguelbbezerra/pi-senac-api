import { DblistPodologo } from "../../../data/usecase/podologo/db-list-podologo"
import { ok, serverError } from "../../../presentation/helpers/http-helper"
import { Controller, HttpRequest, HttpResponse } from "../../../presentation/protocols"

export class ListPodologoController implements Controller {
  private readonly dbPodologo: DblistPodologo
  constructor (dbPodologo: DblistPodologo) {
    this.dbPodologo = dbPodologo
  }
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {

      const podologos = await this.dbPodologo.list(httpRequest.params)
      return ok(podologos)
    } catch (error) {
      serverError()
    }
  }
}