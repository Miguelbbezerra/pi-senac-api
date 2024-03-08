import { Paciente } from "domain/model/paciente"
import { FindOptionsWhere } from "typeorm"

export interface QueryPaciente extends FindOptionsWhere<Paciente> {
  id: number
  nome: string
  cpf: string
  email: string
  telefone: string
  dataNascimento: Date
  genero: string
  endereco: string
}

export interface ListarPaciente {
  list (query: QueryPaciente): Promise<Paciente[]>
}