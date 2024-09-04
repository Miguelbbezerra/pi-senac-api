import { DbEditaAgendamento } from '../../../../data/usecase/agendamento/db-edita-agendamento'
import { AgendamentoRepository } from '../../../../infra/db/mysql/repository/agendamento/editar'
import { EditaAgendamentoController } from '../../../../presentation/controllers/agendamento/agendamento-editar'

export const makeEditarAgendamentoController =
  (): EditaAgendamentoController => {
    const pacienteRepository = new AgendamentoRepository()
    const dbAddAgendamento = new DbEditaAgendamento(pacienteRepository)
    return new EditaAgendamentoController(dbAddAgendamento)
  }
