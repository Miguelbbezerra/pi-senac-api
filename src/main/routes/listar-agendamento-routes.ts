import { Router } from "express"
import { adaptRoute } from "../adapters/express-route-adapter"
import { makeListarAgendamentoController } from "../factories/controllers/agendamento/listar"

export default (router: Router): void => {
  router.get('/agendamento', adaptRoute(makeListarAgendamentoController()))
}