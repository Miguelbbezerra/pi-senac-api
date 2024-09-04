import { EditaAgendamento } from '../../../domain/usecase/agendamento/editar-agendamento'
import { ok, serverError } from '../../../presentation/helpers/http-helper'
import {
  Controller,
  HttpRequest,
  HttpResponse
} from '../../../presentation/protocols'

export class EditaAgendamentoController implements Controller {
  private readonly editaAgendamento: EditaAgendamento
  constructor(editaAgendamento: EditaAgendamento) {
    this.editaAgendamento = editaAgendamento
  }
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id, ...rest } = httpRequest.body
      const paciente = await this.editaAgendamento.editar(id, rest)
      return ok(paciente)
    } catch (error) {
      serverError()
    }
  }
}
