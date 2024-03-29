import { Podologo } from "domain/model/podologo"
import { FindOptionsWhere } from "typeorm"

export interface QueryPodologo extends FindOptionsWhere<Podologo> {
  id: number
  nome: string
  cpf: string
  email: string
  telefone: string
  dataNascimento: string
  genero: string
  endereco: string
}

export interface ListPodologo {
  list (query: QueryPodologo): Promise<Podologo[]>
}