import { DbListaPaciente } from "../../../../data/usecase/paciente/db-lista-paciente"
import { PacienteRepository } from "../../../../infra/db/mysql/repository/paciente/lista"
import { PacienteListarController } from "../../../../presentation/controllers/paciente/paciente-listar"

export const makeListarPacienteController = (): PacienteListarController => {
  const pacienteListarRepository = new PacienteRepository()
  const dbListaPaciente = new DbListaPaciente(pacienteListarRepository)
  return new PacienteListarController(dbListaPaciente)
}