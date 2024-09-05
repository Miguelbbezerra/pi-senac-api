import { Podologo } from '../../../../domain/model/podologo'

export interface BuscaPorEmailRepository {
  buscar(email: string): Promise<Podologo>
}
