import { BuscaPorEmailRepository } from '../../../../../data/protocols/db/podologo/busca-por-email-repository'
import { Podologo } from '../../../../../domain/model/podologo'
import { AppDataSource } from '../../data-source'
import { PodologoSchema } from '../../schema/podologo'

export class BuscaPorEmail implements BuscaPorEmailRepository {
  async buscar(email: string): Promise<Podologo> {
    const podologoRepository = AppDataSource.getRepository(PodologoSchema)
    return await podologoRepository.findOneBy({ email: email })
  }
}
