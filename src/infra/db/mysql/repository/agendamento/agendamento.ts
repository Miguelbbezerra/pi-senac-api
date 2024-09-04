import { AddAgendamentoRepository } from '../../../../../data/protocols/db/agendamento/add-agendamento-repository'
import { Agendamento } from '../../../../../domain/model/agendamento'
import { AgendamentoModel } from '../../../../../domain/usecase/agendamento/add-agendamento'
import { AppDataSource } from '../../data-source'
import { AgendamentoSchema } from '../../schema/agendamento'

export class AgendamentoRepository implements AddAgendamentoRepository {
  async add(agendamentoData: AgendamentoModel): Promise<Agendamento> {
    const agendamentoRepository = AppDataSource.getRepository(AgendamentoSchema)
    return agendamentoRepository.save(agendamentoData)
  }
}
