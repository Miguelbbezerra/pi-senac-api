import { Router } from 'express'
import { adaptRoute } from '../../main/adapters/express-route-adapter'
import { makeAnamneseController } from '../../main/factories/controllers/anamnese/cadastrar'

export default (router: Router): void => {
  router.post('/anamnese', adaptRoute(makeAnamneseController()))
}
