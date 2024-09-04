import { EditaPodologo } from '../../../domain/usecase/podologo/editar-podologo'
import { ok, serverError } from '../../../presentation/helpers/http-helper'
import {
  Controller,
  HttpRequest,
  HttpResponse
} from '../../../presentation/protocols'

export class EditaPodologoController implements Controller {
  private readonly editaPodologo: EditaPodologo
  constructor(editaPodologo: EditaPodologo) {
    this.editaPodologo = editaPodologo
  }
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id, ...rest } = httpRequest.body
      const paciente = await this.editaPodologo.editar(id, rest)
      return ok(paciente)
    } catch (error) {
      serverError()
    }
  }
}
