import { conflict, created } from './../utils/http-helper';
import { DuplicateEmailError } from './../../domain/errors/user/duplicateEmailError';
import { HttpRequest, HttpResponse } from './../utils';
import { Controller } from '../utils/ports/controller';
import { CreateUserUseCase } from './../../usecases/create-user-use-case';

export class CreateUserController implements Controller {
    constructor(private readonly useCase: CreateUserUseCase) { }

    async handle(request: HttpRequest): Promise<HttpResponse> {
        const response = await this.useCase.perform({
            name: request.body.name,
            email: request.body.email
        })

        if (response instanceof DuplicateEmailError) {
            return conflict({
                code: response.code,
                message: response.message
            })
        }

        return created(response)
    }
}