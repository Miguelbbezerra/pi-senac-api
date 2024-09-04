import { EditaPacienteRepository } from 'data/protocols/db/paciente/edita-paciente-repository'
import { Paciente } from 'domain/model/paciente'
import { PacienteModel } from 'domain/usecase/paciente/add-paciente'
import { EditaPaciente } from 'domain/usecase/paciente/editar-paciente'

export class DbEditaPaciente implements EditaPaciente {
  private readonly agendamentoRepository: EditaPacienteRepository
  constructor(agendamentoRepository: EditaPacienteRepository) {
    this.agendamentoRepository = agendamentoRepository
  }
  async editar(pacienteData: PacienteModel, id: number): Promise<Paciente> {
    return await this.agendamentoRepository.editar(pacienteData, id)
  }
}
