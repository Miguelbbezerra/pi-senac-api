import { Agendamento } from 'domain/model/agendamento'
import { AgendamentoModel } from './add-agendamento'

export interface EditaAgendamento {
  editar(agendamentoData: AgendamentoModel, id: number): Promise<Agendamento>
}
