import { CompareAdapter } from '../../../../infra/criptography/compare-adapter'
import { BuscaPorEmail } from '../../../../infra/db/mysql/repository/podologo/busca-por-email'
import { TokenAdapter } from '../../../../infra/token/token-adapter'
import { LoginController } from '../../../../presentation/controllers/podologo/login-podologo'
import { EmailValidatorAdapter } from '../../../../presentation/utils/email-validator-adapter'

export const makeloginPodologoController = (): LoginController => {
  const emailValidator = new EmailValidatorAdapter()
  const comparePassword = new CompareAdapter()
  const podologoRepository = new BuscaPorEmail()
  const makeToken = new TokenAdapter()
  return new LoginController(
    emailValidator,
    comparePassword,
    podologoRepository,
    makeToken
  )
}
