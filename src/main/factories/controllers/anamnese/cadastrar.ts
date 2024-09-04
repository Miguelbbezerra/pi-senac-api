import { DbAddAnamnese } from '../../../../data/usecase/anamnese/db-add-anamnese'
import { AnamneseRepository } from '../../../../infra/db/mysql/repository/anamnese/anamnese'
import { AnamneseController } from '../../../../presentation/controllers/anamnese/anamnese'

export const makeAnamneseController = (): AnamneseController => {
  const pacienteRepository = new AnamneseRepository()
  const dbAddAnamnese = new DbAddAnamnese(pacienteRepository)
  return new AnamneseController(dbAddAnamnese)
}
