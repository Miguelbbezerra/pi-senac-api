import { EditaAgendamentoRepository } from 'data/protocols/db/agendamento/edita-agendamento-repository'
import { Agendamento } from '../../../../../domain/model/agendamento'
import { AgendamentoModel } from '../../../../../domain/usecase/agendamento/add-agendamento'
import { AppDataSource } from '../../data-source'
import { AgendamentoSchema } from '../../schema/agendamento'

export class AgendamentoRepository implements EditaAgendamentoRepository {
  async editar(
    agendamentoData: AgendamentoModel,
    id: number
  ): Promise<Agendamento> {
    const agendamentoRepository = AppDataSource.getRepository(AgendamentoSchema)
    const agendamento = await agendamentoRepository.findOneBy({ id: id })
    const updateResult = await agendamentoRepository.update(
      agendamento,
      agendamentoData
    )
    if ((updateResult.affected = 1)) {
      return await agendamentoRepository.findOneBy({ id: id })
    } else {
      throw new Error('Erro ao atualizar agendamento')
    }
  }
}
