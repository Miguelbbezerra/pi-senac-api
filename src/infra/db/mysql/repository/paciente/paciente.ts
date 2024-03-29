import { AddPacienteRepository } from "../../../../../data/protocols/db/paciente/add-paciente-repository";
import { Paciente } from "../../../../../domain/model/paciente";
import { PacienteModel } from "../../../../../domain/usecase/add-paciente";
import { AppDataSource } from "../../data-source";
import { PacienteSchema } from "../../schema/paciente";

export class PacienteRepository implements AddPacienteRepository {
  async add (pacienteData: PacienteModel): Promise<Paciente> {
    const pacienteRepository = AppDataSource.getRepository(PacienteSchema)

    const paciente = pacienteRepository.save({
      ...pacienteData
    })
    return paciente
  }
}