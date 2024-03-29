import { Router } from "express"
import { adaptRoute } from "../adapters/express-route-adapter"
import { makePodologoController } from "../factories/controllers/podologo/podologo"

export default (router: Router): void => {
  router.post('/podologo', adaptRoute(makePodologoController()))
}