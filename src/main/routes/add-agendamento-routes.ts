import { Router } from 'express'
import { makeAgendamentoController } from '../../main/factories/controllers/agendamento/cadastrar'
import { adaptRoute } from '../adapters/express-route-adapter'

export default (router: Router): void => {
  router.post('/agendamento', adaptRoute(makeAgendamentoController()))
}
