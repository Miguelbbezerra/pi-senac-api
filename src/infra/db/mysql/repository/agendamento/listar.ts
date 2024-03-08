import { QueryAgendamento } from "domain/usecase/agendamento/listar-agendamento"
import { ListarAgendamentoRepository } from "../../../../../data/protocols/db/agendamento/lista-agendamento-repository"
import { Agendamento } from "../../../../../domain/model/agendamento"
import { AppDataSource } from "../../data-source"
import { AgendamentoSchema } from "../../schema/agendamento"

export class AgendamentoRepository implements ListarAgendamentoRepository {
  async list (query: QueryAgendamento): Promise<Agendamento[]> {
    const agendamentoRepository = AppDataSource.getRepository(AgendamentoSchema)
    return agendamentoRepository.find({
      where: {
        ...query
      }
    })
  }

}