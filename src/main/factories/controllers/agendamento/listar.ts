import { DbListaAgendamento } from "../../../../data/usecase/agendamento/db-lista-agendamento"
import { AgendamentoRepository } from "../../../../infra/db/mysql/repository/agendamento/listar"
import { ListarAgendamentoController } from "../../../../presentation/controllers/agendamento/listar"

export const makeListarAgendamentoController = (): ListarAgendamentoController => {

  const listarAgendamentoRepository = new AgendamentoRepository()
  const dbListarAgendamento = new DbListaAgendamento(listarAgendamentoRepository)
  return new ListarAgendamentoController(dbListarAgendamento)
}