import { Router } from 'express'
import { makeAgendamentoController } from '../../main/factories/controllers/agendamento/cadastrar'
import { auth } from '../../main/middlewares'
import { adaptRoute } from '../adapters/express-route-adapter'

export default (router: Router): void => {
  router.post('/agendamento', auth, adaptRoute(makeAgendamentoController()))
}
