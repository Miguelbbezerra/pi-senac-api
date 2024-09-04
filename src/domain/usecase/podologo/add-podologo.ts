import { Podologo } from '../../model/podologo'

export interface AddPodologoModel {
  senha: string
  nomeCompleto: string
  cpf: string
  email: string
  telefone: string
  dataNascimento: string
  genero: string
  endereco: string
}

export interface AddPodologo {
  add(podologoDto: AddPodologoModel): Promise<Podologo>
}
