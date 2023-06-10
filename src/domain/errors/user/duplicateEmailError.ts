import { ApplicationError } from '../apliccationError'

export class DuplicateEmailError extends ApplicationError {
    constructor() {
        super({
            code: 'PJ01',
            message: 'The email provided is already in use'
        })
    }
}