import { Anamnese } from 'domain/model/anamnese'
import { AnamneseModel } from './add-anamnese'

export interface EditaAnamnese {
  editar(agendamentoData: AnamneseModel, id: number): Promise<Anamnese>
}
