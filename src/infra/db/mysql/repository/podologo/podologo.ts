import { AddPodologoRepository } from "../../../../../data/protocols/db/podologo/add-podologo-repository";
import { Podologo } from "../../../../../domain/model/podologo";
import { AddPodologoModel } from "../../../../../domain/usecase/add-podologo";
import { AppDataSource } from "../../data-source";
import { PodologoSchema } from "../../schema/podologo";

export class PodologoRepository implements AddPodologoRepository {
    async add (accountData: AddPodologoModel): Promise<Podologo> {
        const podologoRepository = AppDataSource.getRepository(PodologoSchema)
        const podologo = await podologoRepository.save({
            ...accountData
        })
        return podologo
    };

}