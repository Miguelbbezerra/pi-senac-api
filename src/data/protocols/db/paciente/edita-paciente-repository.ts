import { Paciente } from 'domain/model/paciente'
import { PacienteModel } from 'domain/usecase/paciente/add-paciente'

export interface EditaPacienteRepository {
  editar(pacienteData: PacienteModel, id: number): Promise<Paciente>
}
