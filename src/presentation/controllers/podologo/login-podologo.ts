import { CompareCrypter } from '../../../data/protocols/compare-crypter'
import { BuscaPorEmailRepository } from '../../../data/protocols/db/podologo/busca-por-email-repository'
import { MakeToken } from '../../../data/protocols/make-token'
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
import { EmailValidator } from '../../../presentation/protocols/email-validator'

export class LoginController implements Controller {
  private readonly _emailValidator: EmailValidator
  private readonly _compareCrypter: CompareCrypter
  private readonly _podologoRepository: BuscaPorEmailRepository
  private readonly _tokenAdapter: MakeToken
  constructor(
    emailValidator: EmailValidator,
    compareCrypter: CompareCrypter,
    podologoRepository: BuscaPorEmailRepository,
    tokenAdapter: MakeToken
  ) {
    this._emailValidator = emailValidator
    this._compareCrypter = compareCrypter
    this._podologoRepository = podologoRepository
    this._tokenAdapter = tokenAdapter
  }
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { email, senha } = httpRequest.body
      if (!this._emailValidator.isValid(email)) {
        return badRequest(new InvalidParamError('Email inválido'))
      }
      const podologo = await this._podologoRepository.buscar(email)

      const passIsValid = await this._compareCrypter.compare(
        senha,
        podologo.senha
      )
      if (!passIsValid) {
        return badRequest(new InvalidParamError('Verifique os dados de login'))
      }
      const bearer = this._tokenAdapter.make({
        nome: podologo.nomeCompleto,
        email: podologo.email
      })
      return ok({ message: 'usuário logado', token: bearer })
    } catch (error) {
      return serverError(error)
    }
  }
}
