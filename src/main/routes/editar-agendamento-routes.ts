import { Router } from 'express'
import { adaptRoute } from '../../main/adapters/express-route-adapter'
import { makeEditarAgendamentoController } from '../../main/factories/controllers/agendamento/editar'

export default (router: Router): void => {
  router.put('/agendamento', adaptRoute(makeEditarAgendamentoController()))
}
