import { IUserRepository } from './../domain/repositories/user-repository';
import { IUserCase } from './ports';
import { User, CreateUserDTO } from "@/domain/entities";
import { DuplicateEmailError } from "@/domain/errors";


export class CreateUser implements IUserCase {
    constructor(private readonly repo: IUserRepository) { }

    async perform(data: CreateUserDTO): Promise<User | DuplicateEmailError> {
        // Aqui estaria a operação que verifica o email duplicado
        return await this.repo.create(data)
    }
}