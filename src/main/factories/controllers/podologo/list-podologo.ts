import { DblistPodologo } from "../../../../data/usecase/podologo/db-list-podologo"
import { PodologoRepository } from "../../../../infra/db/mysql/repository/podologo/list-podologo"
import { ListPodologoController } from "../../../../presentation/controllers/podologo/list-podologo"

export const makeListPodologoController = (): ListPodologoController => {
  const podologoRepository = new PodologoRepository()
  const dbAddPodologo = new DblistPodologo(podologoRepository)
  return new ListPodologoController(dbAddPodologo)
}