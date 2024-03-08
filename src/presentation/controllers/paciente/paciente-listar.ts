import { DbListaPaciente } from "../../../data/usecase/paciente/db-lista-paciente";
import { ok, serverError } from "../../../presentation/helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../../presentation/protocols";

export class PacienteListarController implements Controller {
  private readonly dbPaciente: DbListaPaciente
  constructor (dbPaciente: DbListaPaciente) {
    this.dbPaciente = dbPaciente
  }
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {

      const pacientes = await this.dbPaciente.list(httpRequest.params)
      return ok(pacientes)
    } catch (error) {
      serverError()
    }
  }
}