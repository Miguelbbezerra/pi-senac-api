import { Router } from "express"
import { adaptRoute } from "../adapters/express-route-adapter"
import { makeListPodologoController } from "../factories/controllers/podologo/list-podologo"

export default (router: Router): void => {
  router.get('/podologo', adaptRoute(makeListPodologoController()))
}