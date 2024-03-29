import { Anamnese } from "../../../../domain/model/anamnese";
import { AnamneseModel } from "../../../../domain/usecase/add-anamnese";

export interface AddAnamneseRepository {
  add (anamneseData: AnamneseModel): Promise<Anamnese>
}