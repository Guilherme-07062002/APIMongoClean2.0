import { MongoUserRepository } from '@/external/db/mongo/repositories/mongo-user-repository';
import { CreateUserUseCase } from "@/usecases";
import { CreateUserController } from "@/presentation/controllers/user/create-user-controller";
import { MongoDBClient } from '@/../mongo';

export const makeCreatePjAccountController = (): CreateUserController => {
    const mongo = new MongoDBClient('mongodb://127.0.0.1:27017/apiMongo')
    const repo = new MongoUserRepository(mongo);
    const useCase = new CreateUserUseCase(repo);
    return new CreateUserController(useCase);
  };