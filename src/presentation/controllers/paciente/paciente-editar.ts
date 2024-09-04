import { EditaPaciente } from '../../../domain/usecase/paciente/editar-paciente'
import { ok, serverError } from '../../../presentation/helpers/http-helper'
import {
  Controller,
  HttpRequest,
  HttpResponse
} from '../../../presentation/protocols'

export class EditaPacienteController implements Controller {
  private readonly editaPaciente: EditaPaciente
  constructor(editaPaciente: EditaPaciente) {
    this.editaPaciente = editaPaciente
  }
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id, ...rest } = httpRequest.body
      const paciente = await this.editaPaciente.editar(id, rest)
      return ok(paciente)
    } catch (error) {
      serverError()
    }
  }
}
