import { ListarPacienteRepository } from "data/protocols/db/paciente/lista-paciente-repository"
import { Paciente } from "domain/model/paciente"
import { QueryPaciente } from "domain/usecase/paciente/lista-paciente"
import { AppDataSource } from "../../data-source"
import { PacienteSchema } from "../../schema/paciente"

export class PacienteRepository implements ListarPacienteRepository {
  async list (query: QueryPaciente): Promise<Paciente[]> {
    const PacienteRepository = AppDataSource.getRepository(PacienteSchema)
    return PacienteRepository.find({
      where: {
        ...query
      }
    })
  }

}