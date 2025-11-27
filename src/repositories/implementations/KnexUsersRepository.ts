import { db } from '../../database/connection'
import { User, UserRole, UserStatus } from '../../models/users/User'
import { CreateUserDTO } from '../../dtos/users/CreateUserDTO'
import { IUsersRepository } from '../interfaces/IUsersRepository'

export class KnexUsersRepository implements IUsersRepository {
  async findById(id: number): Promise<User | undefined> {
    const user = await db<User>('users').where({ id }).first()
    return user
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = await db<User>('users').where({ email }).first()
    return user
  }

  async create({ name, email, password }: CreateUserDTO): Promise<User> {
    const [createdUser] = await db('users')
      .insert({
        name,
        email,
        password,
        status: UserStatus.PENDING, // Default
        role: UserRole.USER // Default
      })
      .returning('*')

    return createdUser
  }
}
