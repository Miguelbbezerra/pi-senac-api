import { Paciente } from "domain/model/paciente"
import { Podologo } from "domain/model/podologo"
import { FindOptionsWhere } from "typeorm"
import { Agendamento } from "../../../domain/model/agendamento"

export interface QueryAgendamento extends FindOptionsWhere<Agendamento> {
  dataHora?: Date
  descricao?: string
  id?: number,
  paciente?: Paciente
  podologo?: Podologo
  situacao?: string
}

export interface ListarAgendamento {
  list (query: QueryAgendamento): Promise<Agendamento[]>
}