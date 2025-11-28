import { hash } from 'bcryptjs'
import { CreateUserDTO } from '../../dtos/users/CreateUserDTO'
import { User } from '../../models/users/User'
import { IUsersRepository } from '../../repositories/interfaces/IUsersRepository'
import { AppError } from '../../shared/errors/AppError'

export class CreateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  public async execute({
    name,
    email,
    password
  }: CreateUserDTO): Promise<User> {
    // Safety: Verifica se o e-mail já existe
    const userAlreadyExists = await this.usersRepository.findByEmail(email)

    if (userAlreadyExists) {
      throw new AppError('Usuário já existe!', 409) // 409 Conflict
    }

    // Hash da senha
    const passwordHash = await hash(password, 8)

    // Create
    const user = await this.usersRepository.create({
      name,
      email,
      password: passwordHash
    })

    return user
  }
}
