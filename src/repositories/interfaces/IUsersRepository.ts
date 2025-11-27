import { User } from '../../models/users/User'
import { CreateUserDTO } from '../../dtos/users/CreateUserDTO'

export interface IUsersRepository {
  // Método para buscar por ID: Útil para rotas como /me ou /profile
  findById(id: number): Promise<User | undefined>
  // Método para buscar por email: Retorna User ou undefined (caso não ache)
  findByEmail(email: string): Promise<User | undefined>
  // Método para criar: Recebe o DTO e DEVE retornar o User completo (com ID)
  create(data: CreateUserDTO): Promise<User>
}
