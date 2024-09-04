import { EditaPodologoRepository } from 'data/protocols/db/podologo/edita-podologo-repository'
import { Podologo } from 'domain/model/podologo'
import { AddPodologoModel } from 'domain/usecase/podologo/add-podologo'
import { EditaPodologo } from 'domain/usecase/podologo/editar-podologo'

export class DbEditaPodologo implements EditaPodologo {
  private readonly podologoRepository: EditaPodologoRepository
  constructor(podologoRepository: EditaPodologoRepository) {
    this.podologoRepository = podologoRepository
  }
  async editar(podologoData: AddPodologoModel, id: number): Promise<Podologo> {
    return await this.podologoRepository.editar(podologoData, id)
  }
}
