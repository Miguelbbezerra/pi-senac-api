import { Router } from 'express'
import { makeListarPacienteController } from '../../main/factories/controllers/paciente/paciente-listar'
import { adaptRoute } from '../adapters/express-route-adapter'

export default (router: Router): void => {
  router.get('/paciente', adaptRoute(makeListarPacienteController()))
}
