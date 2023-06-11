import { CreateUserDTO, User } from '@/domain/entities';
import { DuplicateEmailError } from '@/domain/errors';
import { IUserRepository } from '@/domain/repositories/user-repository';
import { userModel } from '@/../mongo';
import { MongoDBClient } from '@/../mongo';

export class MongoUserRepository implements IUserRepository {
    constructor(private readonly mongo: MongoDBClient) { }

    async create(data: CreateUserDTO): Promise<User | DuplicateEmailError> {
        try {
            if (this.mongo.db != null) {
                const user = await userModel.create(data);
                return user.toJSON() as User;
            } else {
                throw new Error('MongoDB connection not established');
            }
        } catch (error) {
            return new DuplicateEmailError();
        }
    }
}