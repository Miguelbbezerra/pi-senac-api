import { DbAddAgendamento } from '../../../../data/usecase/agendamento/db-add-agendamento'
import { AgendamentoRepository } from '../../../../infra/db/mysql/repository/agendamento/agendamento'
import { AgendamentoController } from '../../../../presentation/controllers/agendamento/agendamento'

export const makeAgendamentoController = (): AgendamentoController => {
  const pacienteRepository = new AgendamentoRepository()
  const dbAddAgendamento = new DbAddAgendamento(pacienteRepository)
  return new AgendamentoController(dbAddAgendamento)
}
