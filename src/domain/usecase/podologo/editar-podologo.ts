import { Podologo } from 'domain/model/podologo'
import { AddPodologoModel } from './add-podologo'

export interface EditaPodologo {
  editar(agendamentoData: AddPodologoModel, id: number): Promise<Podologo>
}
