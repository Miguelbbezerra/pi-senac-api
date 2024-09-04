import { DbListaAnamnese } from '../../../data/usecase/anamnese/db-lista-anamnese'
import { ok, serverError } from '../../../presentation/helpers/http-helper'
import {
  Controller,
  HttpRequest,
  HttpResponse
} from '../../../presentation/protocols'

export class ListarAnamneseController implements Controller {
  private readonly dblistaAnamnese: DbListaAnamnese
  constructor(dblistaAnamnese: DbListaAnamnese) {
    this.dblistaAnamnese = dblistaAnamnese
  }
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const agendamentos = await this.dblistaAnamnese.list(httpRequest.params)
      return ok(agendamentos)
    } catch (error) {
      serverError()
    }
  }
}
