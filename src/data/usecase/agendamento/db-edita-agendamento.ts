import { EditaAgendamentoRepository } from 'data/protocols/db/agendamento/edita-agendamento-repository'
import { Agendamento } from 'domain/model/agendamento'
import { AgendamentoModel } from 'domain/usecase/agendamento/add-agendamento'
import { EditaAgendamento } from 'domain/usecase/agendamento/editar-agendamento'

export class DbEditaAgendamento implements EditaAgendamento {
  private readonly agendamentoRepository: EditaAgendamentoRepository
  constructor(agendamentoRepository: EditaAgendamentoRepository) {
    this.agendamentoRepository = agendamentoRepository
  }
  async editar(
    agendamentoData: AgendamentoModel,
    id: number
  ): Promise<Agendamento> {
    return await this.agendamentoRepository.editar(agendamentoData, id)
  }
}
