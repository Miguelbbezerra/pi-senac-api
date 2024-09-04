import { EditaPacienteRepository } from 'data/protocols/db/paciente/edita-paciente-repository'
import { Paciente } from 'domain/model/paciente'
import { PacienteModel } from 'domain/usecase/paciente/add-paciente'
import { AppDataSource } from '../../data-source'
import { PacienteSchema } from '../../schema/paciente'

export class PacienteRepository implements EditaPacienteRepository {
  async editar(pacienteData: PacienteModel, id: number): Promise<Paciente> {
    const pacienteRepository = AppDataSource.getRepository(PacienteSchema)
    const paciente = await pacienteRepository.findOneBy({ id: id })
    const updateResult = await pacienteRepository.update(paciente, pacienteData)
    if ((updateResult.affected = 1)) {
      return await pacienteRepository.findOneBy({ id: id })
    } else {
      throw new Error('Erro ao atualizar paciente')
    }
  }
}
