import { QueryAgendamento } from "domain/usecase/agendamento/listar-agendamento";
import { Agendamento } from "../../../../domain/model/agendamento";

export interface ListarAgendamentoRepository {
  list (query: QueryAgendamento): Promise<Agendamento[]>
}