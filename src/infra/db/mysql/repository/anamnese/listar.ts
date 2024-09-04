import { ListarAnamneseRepository } from 'data/protocols/db/anamnese/lista-anamnese-repository'
import { Anamnese } from 'domain/model/anamnese'
import { QueryAnamnese } from 'domain/usecase/anamnese/listar-anamnese'
import { AppDataSource } from '../../data-source'
import { AnamneseSchema } from '../../schema/anamnese'

export class AnamneseRepository implements ListarAnamneseRepository {
  async list(query: QueryAnamnese): Promise<Anamnese[]> {
    const anamneseRepository = AppDataSource.getRepository(AnamneseSchema)
    return anamneseRepository.find({
      where: {
        ...query
      }
    })
  }
}
