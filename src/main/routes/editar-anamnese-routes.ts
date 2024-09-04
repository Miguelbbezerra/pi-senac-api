import { Router } from 'express'
import { adaptRoute } from '../../main/adapters/express-route-adapter'
import { makeEditarAnamneseController } from '../../main/factories/controllers/anamnese/editar'

export default (router: Router): void => {
  router.put('/anamnese', adaptRoute(makeEditarAnamneseController()))
}
