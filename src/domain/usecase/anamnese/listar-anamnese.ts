import { Anamnese } from 'domain/model/anamnese'
import { FindOptionsWhere } from 'typeorm'

export interface QueryAnamnese extends FindOptionsWhere<Anamnese> {
  dataHora?: Date
  descricao?: string
  id?: number
  situacao?: string
}

export interface ListarAnamnese {
  list(query: QueryAnamnese): Promise<Anamnese[]>
}
