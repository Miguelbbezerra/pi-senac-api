import { Podologo } from '../../../../domain/model/podologo'
import { AddPodologoModel } from '../../../../domain/usecase/add-podologo'

export interface AddPodologoRepository {
  add: (accountData: AddPodologoModel) => Promise<Podologo>
}
