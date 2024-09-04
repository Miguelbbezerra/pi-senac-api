import { Podologo } from '../../../domain/model/podologo'
import {
  AddPodologo,
  AddPodologoModel
} from '../../../domain/usecase/podologo/add-podologo'
import { AddPodologoRepository } from '../../protocols/db/podologo/add-podologo-repository'
import { Encrypter } from '../../protocols/encrypter'

export class DbAddpodologo implements AddPodologo {
  private readonly encrypter: Encrypter
  private readonly addpodologoRepository: AddPodologoRepository

  constructor(
    encrypter: Encrypter,
    addpodologoRepository: AddPodologoRepository
  ) {
    this.encrypter = encrypter
    this.addpodologoRepository = addpodologoRepository
  }
  async add(podologoDto: AddPodologoModel): Promise<Podologo> {
    const hashedPassword = await this.encrypter.encrypt(podologoDto.senha)
    const podologo = await this.addpodologoRepository.add(
      Object.assign({}, podologoDto, { senha: hashedPassword })
    )
    return podologo
  }
}
