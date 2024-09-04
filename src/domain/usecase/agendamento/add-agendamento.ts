import { Agendamento } from '../../model/agendamento'
import { Paciente } from '../../model/paciente'
import { Podologo } from '../../model/podologo'

export interface AgendamentoModel {
  paciente: Paciente
  podologo: Podologo
  dataHora: Date
  descricao: string
  situacao: string
}

export interface AddAgendamento {
  add(agendamentoData: AgendamentoModel): Promise<Agendamento>
}
