import { Paciente } from "domain/model/paciente";
import { QueryPaciente } from "domain/usecase/paciente/lista-paciente";

export interface ListarPacienteRepository {
  list (query: QueryPaciente): Promise<Paciente[]>
}