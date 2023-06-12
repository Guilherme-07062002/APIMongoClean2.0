import { Express, Router } from "express";
import { userRoutes } from "../routes/user-routes";

export default (app: Express): void => {
    const apiRouter = Router();
    apiRouter.use('/user', userRoutes(Router()));
    app.use('/api', apiRouter);
  };