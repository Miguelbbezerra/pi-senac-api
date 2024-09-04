import { Router } from 'express'
import { adaptRoute } from '../../main/adapters/express-route-adapter'
import { makeEditarPacienteController } from '../../main/factories/controllers/paciente/editar'

export default (router: Router): void => {
  router.put('/paciente', adaptRoute(makeEditarPacienteController()))
}
