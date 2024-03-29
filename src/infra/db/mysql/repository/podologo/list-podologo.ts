import { ListPodologoRepository } from "data/protocols/db/podologo/list-podologo-repository"
import { Podologo } from "domain/model/podologo"
import { QueryPodologo } from "domain/usecase/podologo/list-podologo"
import { AppDataSource } from "../../data-source"
import { PodologoSchema } from "../../schema/podologo"

export class PodologoRepository implements ListPodologoRepository {
  async list (query: QueryPodologo): Promise<Podologo[]> {
    const PodologoRepository = AppDataSource.getRepository(PodologoSchema)
    return PodologoRepository.find({
      where: {
        ...query
      }
    })
  }

}