import { DbEditaPodologo } from '../../../../data/usecase/podologo/db-edita-podologo'
import { PodologoRepository } from '../../../../infra/db/mysql/repository/podologo/editar'
import { EditaPodologoController } from '../../../../presentation/controllers/podologo/podologo-editar'

export const makeEditarPodologoController = (): EditaPodologoController => {
  const podologoRepository = new PodologoRepository()
  const dbAddPodologo = new DbEditaPodologo(podologoRepository)
  return new EditaPodologoController(dbAddPodologo)
}
