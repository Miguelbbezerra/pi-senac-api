import validator from 'validator'
import { DbAddpodologo } from '../../../data/usecase/podologo/db-add-podologo'
import { AddPodologoModel } from '../../../domain/usecase/podologo/add-podologo'
import { InvalidParamError } from '../../../presentation/errors'
import {
  badRequest,
  ok,
  serverError
} from '../../../presentation/helpers/http-helper'
import {
  Controller,
  HttpRequest,
  HttpResponse
} from '../../../presentation/protocols'

export class PodologoController implements Controller {
  private readonly addPodologo: DbAddpodologo
  constructor(addPodologo: DbAddpodologo) {
    this.addPodologo = addPodologo
  }
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const body = httpRequest.body

      const validateCPF = /^(?:(\d)\1{10})$|(\D)|^(\d{12,})$|^(\d{0,10})$/g
      if (!validateCPF.test(body.cpf)) {
        return badRequest(new InvalidParamError('cpf'))
      }

      if (
        !validator.isDate(body.dataNascimento, {
          format: 'YYYY-mm-dd'
        })
      ) {
        return badRequest(new InvalidParamError('dataNascimento'))
      }
      const podologoDto: AddPodologoModel = {
        senha: body.senha,
        nomeCompleto: body.nomeCompleto,
        cpf: body.cpf,
        email: body.email,
        telefone: body.telefone,
        dataNascimento: body.dataNascimento,
        genero: body.genero,
        endereco: body.endereco
      }

      const podologo = await this.addPodologo.add(podologoDto)

      return ok(podologo)
    } catch (error) {
      serverError()
    }
  }
}
