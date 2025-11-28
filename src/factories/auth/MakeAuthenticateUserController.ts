import { KnexUsersRepository } from '../../repositories/implementations/KnexUsersRepository'
import { AuthenticateUserService } from '../../services/auth/AuthenticateUserService'
import { AuthenticateUserController } from '../../controllers/auth/AuthenticateUserController'

export function makeAuthenticateUserController() {
  // Repository (Camada de Dados)
  const usersRepository = new KnexUsersRepository()

  // Service (Camada de Negócios)
  const authenticateUserService = new AuthenticateUserService(usersRepository)

  // Controller (Camada de Apresentação)
  const authenticateUserController = new AuthenticateUserController(
    authenticateUserService
  )

  return authenticateUserController
}
