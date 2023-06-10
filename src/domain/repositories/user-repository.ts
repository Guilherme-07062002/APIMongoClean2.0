import { User, CreateUserDTO } from '../entities/user';
import { DuplicateEmailError } from '../errors/user/duplicateEmailError';

export interface IUserRepository {
    create(data: CreateUserDTO): Promise<User | DuplicateEmailError>
}