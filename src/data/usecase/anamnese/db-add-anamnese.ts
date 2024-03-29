import { Anamnese } from "../../../domain/model/anamnese";
import { AddAnamnese, AnamneseModel } from "../../../domain/usecase/add-anamnese";
import { AddAnamneseRepository } from "../../protocols/db/anamnese/add-anamnese-repository";

export class DbAddAnamnese implements AddAnamnese {
  private readonly anamneseRepository: AddAnamneseRepository
  constructor (anamneseRepository: AddAnamneseRepository) {
    this.anamneseRepository = anamneseRepository
  }
  async add (anamneseModel: AnamneseModel): Promise<Anamnese> {
    return await this.anamneseRepository.add(anamneseModel)
  }

}