import { DbAddPaciente } from "../../../../data/usecase/paciente/db-add-paciente"
import { PacienteRepository } from "../../../../infra/db/mysql/repository/paciente/paciente"
import { PacienteController } from "../../../../presentation/controllers/paciente/paciente"

export const makePacienteController = (): PacienteController => {
  const pacienteRepository = new PacienteRepository()
  const dbAddPaciente = new DbAddPaciente(pacienteRepository)
  return new PacienteController(dbAddPaciente)
}