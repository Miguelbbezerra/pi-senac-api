import { DbListaAnamnese } from '../../../../data/usecase/anamnese/db-lista-anamnese'
import { AnamneseRepository } from '../../../../infra/db/mysql/repository/anamnese/listar'
import { ListarAnamneseController } from '../../../../presentation/controllers/anamnese/anamnese-listar'

export const makeListarAnamneseController = (): ListarAnamneseController => {
  const listarAnamneseRepository = new AnamneseRepository()
  const dbListarAnamnese = new DbListaAnamnese(listarAnamneseRepository)
  return new ListarAnamneseController(dbListarAnamnese)
}
