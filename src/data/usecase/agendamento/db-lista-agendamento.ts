import { ListarAgendamentoRepository } from "../../../data/protocols/db/agendamento/lista-agendamento-repository";
import { Agendamento } from "../../../domain/model/agendamento";
import { ListarAgendamento, QueryAgendamento } from "../../../domain/usecase/agendamento/listar-agendamento";

export class DbListaAgendamento implements ListarAgendamento {
  private readonly listaAgendamentoRepository: ListarAgendamentoRepository
  constructor (listaAgendamentoRepository: ListarAgendamentoRepository) {
    this.listaAgendamentoRepository = listaAgendamentoRepository
  }
  async list (query: QueryAgendamento): Promise<Agendamento[]> {
    return await this.listaAgendamentoRepository.list(query)
  }

}