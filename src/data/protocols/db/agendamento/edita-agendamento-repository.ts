import { Agendamento } from 'domain/model/agendamento'
import { AgendamentoModel } from 'domain/usecase/agendamento/add-agendamento'

export interface EditaAgendamentoRepository {
  editar(agendamentoData: AgendamentoModel, id: number): Promise<Agendamento>
}
