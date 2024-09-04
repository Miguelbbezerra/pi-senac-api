import { AddAgendamento } from '../../../domain/usecase/agendamento/add-agendamento'
import { ok, serverError } from '../../../presentation/helpers/http-helper'
import {
  Controller,
  HttpRequest,
  HttpResponse
} from '../../../presentation/protocols'

export class AgendamentoController implements Controller {
  private readonly addAgendamento: AddAgendamento
  constructor(addAgendamento: AddAgendamento) {
    this.addAgendamento = addAgendamento
  }
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const paciente = await this.addAgendamento.add(httpRequest.body)
      return ok(paciente)
    } catch (error) {
      serverError()
    }
  }
}
