import { DbEditaPaciente } from '../../../../data/usecase/paciente/db-edita-paciente'
import { PacienteRepository } from '../../../../infra/db/mysql/repository/paciente/editar'
import { EditaPacienteController } from '../../../../presentation/controllers/paciente/paciente-editar'

export const makeEditarPacienteController = (): EditaPacienteController => {
  const pacienteRepository = new PacienteRepository()
  const dbAddPaciente = new DbEditaPaciente(pacienteRepository)
  return new EditaPacienteController(dbAddPaciente)
}
