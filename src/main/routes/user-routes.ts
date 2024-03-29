import { MakeCreateUserController } from './../factories/controllers/user/make-create-user-controller';

import { adaptRoute } from './../adapters/adapt-express-route';
import { Router } from "express";

export const userRoutes = (router: Router): Router => {
    router.post('/', adaptRoute(MakeCreateUserController()))
    return router
}