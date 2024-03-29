import { DbAddpodologo } from '../../../../data/usecase/podologo/db-add-podologo'
import { BcryptAdapter } from '../../../../infra/criptography/bcrypt-adapter'
import { PodologoRepository } from '../../../../infra/db/mysql/repository/podologo/podologo'
import { PodologoController } from '../../../../presentation/controllers/podologo/podologo'
import { EmailValidatorAdapter } from '../../../../presentation/utils/email-validator-adapter'

export const makePodologoController = (): PodologoController => {
  const salt = 12
  const emailValidator = new EmailValidatorAdapter()
  const bcrypt = new BcryptAdapter(salt)
  const podologoRepository = new PodologoRepository()
  const dbAddPodologo = new DbAddpodologo(bcrypt, podologoRepository)
  return new PodologoController(dbAddPodologo)
}
