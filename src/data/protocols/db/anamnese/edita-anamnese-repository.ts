import { Anamnese } from 'domain/model/anamnese'
import { AnamneseModel } from 'domain/usecase/anamnese/add-anamnese'

export interface EditaAnamneseRepository {
  editar(anamneseData: AnamneseModel, id: number): Promise<Anamnese>
}
