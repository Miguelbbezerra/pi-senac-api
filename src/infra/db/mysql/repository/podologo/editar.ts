import { EditaPodologoRepository } from 'data/protocols/db/podologo/edita-podologo-repository'
import { Podologo } from 'domain/model/podologo'
import { AddPodologoModel } from 'domain/usecase/podologo/add-podologo'
import { AppDataSource } from '../../data-source'
import { PodologoSchema } from '../../schema/podologo'

export class PodologoRepository implements EditaPodologoRepository {
  async editar(podologoData: AddPodologoModel, id: number): Promise<Podologo> {
    const podologoRepository = AppDataSource.getRepository(PodologoSchema)
    const podologo = await podologoRepository.findOneBy({ id: id })
    const updateResult = await podologoRepository.update(podologo, podologoData)
    if ((updateResult.affected = 1)) {
      return await podologoRepository.findOneBy({ id: id })
    } else {
      throw new Error('Erro ao atualizar podologo')
    }
  }
}
