import { ListPodologoRepository } from "../../../data/protocols/db/podologo/list-podologo-repository"
import { Podologo } from "../../../domain/model/podologo"
import { ListPodologo, QueryPodologo } from "../../../domain/usecase/podologo/list-podologo"

export class DblistPodologo implements ListPodologo {
  private readonly listPodologoRepository: ListPodologoRepository
  constructor (listPodologoRepository: ListPodologoRepository) {
    this.listPodologoRepository = listPodologoRepository
  }
  async list (query: QueryPodologo): Promise<Podologo[]> {
    return await this.listPodologoRepository.list(query)
  }

}