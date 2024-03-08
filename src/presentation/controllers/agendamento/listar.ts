import { DbListaAgendamento } from "../../../data/usecase/agendamento/db-lista-agendamento";
import { ok, serverError } from "../../../presentation/helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../../presentation/protocols";

export class ListarAgendamentoController implements Controller {
  private readonly dblistaAgendamento: DbListaAgendamento
  constructor (dblistaAgendamento: DbListaAgendamento) {
    this.dblistaAgendamento = dblistaAgendamento
  }
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const agendamentos = await this.dblistaAgendamento.list(httpRequest.params)
      return ok(agendamentos)
    } catch (error) {
      serverError()
    }
  }
}