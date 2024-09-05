import { Router } from 'express'
import { adaptRoute } from '../../main/adapters/express-route-adapter'
import { InvalidParamError } from '../../presentation/errors'
import {
  badRequest,
  ok,
  serverError
} from '../../presentation/helpers/http-helper'
import {
  Controller,
  HttpRequest,
  HttpResponse
} from '../../presentation/protocols'
import { EmailValidator } from '../../presentation/protocols/email-validator'
import { EmailValidatorAdapter } from '../../presentation/utils/email-validator-adapter'

export class LoginController implements Controller {
  private readonly _emailValidator: EmailValidator
  constructor(emailValidator: EmailValidator) {
    this._emailValidator = emailValidator
  }
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { email, senha } = httpRequest.body
      if (!this._emailValidator.isValid(email)) {
        return badRequest(new InvalidParamError('Email inválido'))
      }
      return ok({})
    } catch (error) {
      return serverError(error)
    }
  }
}
const loginController = new LoginController(new EmailValidatorAdapter())
export default (router: Router): void => {
  router.post('/login', adaptRoute(loginController))
}
