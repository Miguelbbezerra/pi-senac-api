import { AddAnamnese } from '../../../domain/usecase/anamnese/add-anamnese'
import { ok, serverError } from '../../../presentation/helpers/http-helper'
import {
  Controller,
  HttpRequest,
  HttpResponse
} from '../../../presentation/protocols'

export class AnamneseController implements Controller {
  private readonly addAnamnese: AddAnamnese
  constructor(addAnamnese: AddAnamnese) {
    this.addAnamnese = addAnamnese
  }
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const paciente = await this.addAnamnese.add(httpRequest.body)
      return ok(paciente)
    } catch (error) {
      serverError()
    }
  }
}
