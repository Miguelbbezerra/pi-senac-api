import { Router } from 'express'
import { adaptRoute } from '../../main/adapters/express-route-adapter'
import { makeEditarPodologoController } from '../../main/factories/controllers/podologo/editar'

export default (router: Router): void => {
  router.put('/podologo', adaptRoute(makeEditarPodologoController()))
}
