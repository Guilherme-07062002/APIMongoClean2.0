import { Request, Response } from "express";
import { Controller } from "@/presentation/utils";

export const adaptRoute = (controller: Controller) => async (request: Request, response: Response) => {
    try {
        const httpResponse = await controller.handle(request)
        response.status(httpResponse.statusCode).json(httpResponse.body)
    } catch (error) {
        console.log(error)
        response.status(500).send({ message: 'Internal server error' })
    }
} 