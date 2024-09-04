import { DbEditaAnamnese } from '../../../../data/usecase/anamnese/db-edita-anamnese'
import { AnamneseRepository } from '../../../../infra/db/mysql/repository/anamnese/editar'
import { EditaAnamneseController } from '../../../../presentation/controllers/anamnese/anamnese-editar'

export const makeEditarAnamneseController = (): EditaAnamneseController => {
  const pacienteRepository = new AnamneseRepository()
  const dbAddAnamnese = new DbEditaAnamnese(pacienteRepository)
  return new EditaAnamneseController(dbAddAnamnese)
}
