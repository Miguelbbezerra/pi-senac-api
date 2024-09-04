import { EditaAnamneseRepository } from 'data/protocols/db/anamnese/edita-anamnese-repository'
import { Anamnese } from 'domain/model/anamnese'
import { AnamneseModel } from 'domain/usecase/anamnese/add-anamnese'
import { EditaAnamnese } from 'domain/usecase/anamnese/editar-anamnese'

export class DbEditaAnamnese implements EditaAnamnese {
  private readonly agendamentoRepository: EditaAnamneseRepository
  constructor(agendamentoRepository: EditaAnamneseRepository) {
    this.agendamentoRepository = agendamentoRepository
  }
  async editar(agendamentoData: AnamneseModel, id: number): Promise<Anamnese> {
    return await this.agendamentoRepository.editar(agendamentoData, id)
  }
}
