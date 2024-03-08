import { ListarPacienteRepository } from "data/protocols/db/paciente/lista-paciente-repository"
import { Paciente } from "domain/model/paciente"
import { ListarPaciente, QueryPaciente } from "domain/usecase/paciente/lista-paciente"

export class DbListaPaciente implements ListarPaciente {
  private readonly listaPacienteRepository: ListarPacienteRepository
  constructor (listaPacienteRepository: ListarPacienteRepository) {
    this.listaPacienteRepository = listaPacienteRepository
  }
  async list (query: QueryPaciente): Promise<Paciente[]> {
    return await this.listaPacienteRepository.list(query)
  }

}