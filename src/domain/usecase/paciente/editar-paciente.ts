import { Paciente } from 'domain/model/paciente'
import { PacienteModel } from './add-paciente'

export interface EditaPaciente {
  editar(agendamentoData: PacienteModel, id: number): Promise<Paciente>
}
