import { Paciente } from '../../../../domain/model/paciente'
import { PacienteModel } from '../../../../domain/usecase/paciente/add-paciente'

export interface AddPacienteRepository {
  add(pacienteData: PacienteModel): Promise<Paciente>
}
