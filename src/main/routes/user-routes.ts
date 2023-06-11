
import { adaptRoute } from './../adapters/adapt-express-route';
import { Router } from "express";

export const userRoutes = (router: Router): Router => {
    // router.post('/', adaptRoute(CreateUserController()))
    return router
}