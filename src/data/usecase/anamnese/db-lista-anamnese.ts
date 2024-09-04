import { ListarAnamneseRepository } from 'data/protocols/db/anamnese/lista-anamnese-repository'
import { Anamnese } from 'domain/model/anamnese'
import {
  ListarAnamnese,
  QueryAnamnese
} from 'domain/usecase/anamnese/listar-anamnese'

export class DbListaAnamnese implements ListarAnamnese {
  private readonly listarAnamneseRepository: ListarAnamneseRepository
  constructor(listarAnamneseRepository: ListarAnamneseRepository) {
    this.listarAnamneseRepository = listarAnamneseRepository
  }
  async list(query: QueryAnamnese): Promise<Anamnese[]> {
    return await this.listarAnamneseRepository.list(query)
  }
}
