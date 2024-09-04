import { Anamnese } from 'domain/model/anamnese'
import { QueryAnamnese } from 'domain/usecase/anamnese/listar-anamnese'

export interface ListarAnamneseRepository {
  list(query: QueryAnamnese): Promise<Anamnese[]>
}
