import { CreateUserController } from '../../controllers/users/CreateUserController'
import { KnexUsersRepository } from '../../repositories/implementations/KnexUsersRepository'
import { CreateUserService } from '../../services/users/CreateUserService'

export function makeCreateUserController() {
  // Repository (Camada de Dados)
  const usersRepository = new KnexUsersRepository()

  // Service (Camada de Negócios)
  const createUserService = new CreateUserService(usersRepository)

  // Controller (Camada de Apresentação)
  const createUserController = new CreateUserController(createUserService)

  return createUserController
}
