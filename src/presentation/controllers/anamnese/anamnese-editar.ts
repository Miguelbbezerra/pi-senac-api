import { EditaAnamnese } from '../../../domain/usecase/anamnese/editar-anamnese'
import { ok, serverError } from '../../../presentation/helpers/http-helper'
import {
  Controller,
  HttpRequest,
  HttpResponse
} from '../../../presentation/protocols'

export class EditaAnamneseController implements Controller {
  private readonly editaAnamnese: EditaAnamnese
  constructor(editaAnamnese: EditaAnamnese) {
    this.editaAnamnese = editaAnamnese
  }
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id, ...rest } = httpRequest.body
      const paciente = await this.editaAnamnese.editar(id, rest)
      return ok(paciente)
    } catch (error) {
      serverError()
    }
  }
}
