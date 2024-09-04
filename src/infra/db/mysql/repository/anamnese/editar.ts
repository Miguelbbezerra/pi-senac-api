import { EditaAnamneseRepository } from 'data/protocols/db/anamnese/edita-anamnese-repository'
import { Anamnese } from 'domain/model/anamnese'
import { AnamneseModel } from 'domain/usecase/anamnese/add-anamnese'
import { AppDataSource } from '../../data-source'
import { AnamneseSchema } from '../../schema/anamnese'

export class AnamneseRepository implements EditaAnamneseRepository {
  async editar(anamneseData: AnamneseModel, id: number): Promise<Anamnese> {
    const anamneseRepository = AppDataSource.getRepository(AnamneseSchema)
    const anamnese = await anamneseRepository.findOneBy({ id: id })
    const updateResult = await anamneseRepository.update(anamnese, anamneseData)
    if ((updateResult.affected = 1)) {
      return await anamneseRepository.findOneBy({ id: id })
    } else {
      throw new Error('Erro ao atualizar anamnese')
    }
  }
}
