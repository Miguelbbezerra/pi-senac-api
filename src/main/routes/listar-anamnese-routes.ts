import { Router } from 'express'
import { adaptRoute } from '../../main/adapters/express-route-adapter'
import { makeListarAnamneseController } from '../../main/factories/controllers/anamnese/listar'

export default (router: Router): void => {
  router.get('/anamnese', adaptRoute(makeListarAnamneseController()))
}
