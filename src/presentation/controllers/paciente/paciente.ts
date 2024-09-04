import { AddPaciente } from '../../../domain/usecase/paciente/add-paciente'
import { ok, serverError } from '../../helpers/http-helper'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class PacienteController implements Controller {
  private readonly addPaciente: AddPaciente
  constructor(addPaciente: AddPaciente) {
    this.addPaciente = addPaciente
  }
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const paciente = await this.addPaciente.add(httpRequest.body)
      return ok(paciente)
    } catch (error) {
      serverError()
    }
  }
}
