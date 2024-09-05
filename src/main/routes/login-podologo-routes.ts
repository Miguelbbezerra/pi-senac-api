import { Router } from 'express'
import { adaptRoute } from '../../main/adapters/express-route-adapter'
import { makeloginPodologoController } from '../../main/factories/controllers/podologo/login'

export default (router: Router): void => {
  router.post('/login', adaptRoute(makeloginPodologoController()))
}
