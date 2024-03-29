import { Podologo } from "domain/model/podologo";
import { QueryPodologo } from "domain/usecase/podologo/list-podologo";

export interface ListPodologoRepository {
  list (query: QueryPodologo): Promise<Podologo[]>
}