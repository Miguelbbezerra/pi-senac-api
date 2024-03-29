import { Paciente } from "../../../domain/model/paciente";
import { AddPaciente, PacienteModel } from "../../../domain/usecase/add-paciente";
import { AddPacienteRepository } from "../../protocols/db/paciente/add-paciente-repository";

export class DbAddPaciente implements AddPaciente {
  private readonly addPacienteRepository: AddPacienteRepository;

  constructor (addPacienteRepository: AddPacienteRepository) {
    this.addPacienteRepository = addPacienteRepository
  }
  async add (pacienteModel: PacienteModel): Promise<Paciente> {
    const cpfRaw = pacienteModel.cpf.replace(/\.|-/gm, '')
    return await this.addPacienteRepository.add(Object.assign({}, pacienteModel, { cpf: cpfRaw }))
  }

}