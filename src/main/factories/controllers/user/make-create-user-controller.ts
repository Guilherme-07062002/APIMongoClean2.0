import { MongoUserRepository } from '@/external/db/mongo/repositories/mongo-user-repository';
import { CreateUserUseCase } from "@/usecases";
import { CreateUserController } from "@/presentation/controllers/user/create-user-controller";
import { mongo } from '@/main/server';

export const MakeCreateUserController = (): CreateUserController => {
  const repo = new MongoUserRepository(mongo);
  const useCase = new CreateUserUseCase(repo);
  return new CreateUserController(useCase);
};