import { Paciente } from '../../model/paciente'

export interface PacienteModel {
  nome: string
  cpf: string
  email: string
  telefone: string
  dataNascimento: Date
  genero: string
  endereco: string
}

export interface AddPaciente {
  add(pacienteModel: PacienteModel): Promise<Paciente>
}
