import { Podologo } from 'domain/model/podologo'
import { AddPodologoModel } from 'domain/usecase/podologo/add-podologo'

export interface EditaPodologoRepository {
  editar(PodologoData: AddPodologoModel, id: number): Promise<Podologo>
}
