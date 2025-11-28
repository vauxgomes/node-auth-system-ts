import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import authConfig from '../../config/auth'
import { IUsersRepository } from '../../repositories/interfaces/IUsersRepository'
import { AppError } from '../../shared/errors/AppError'

// DTOs
import {
  AuthenticateUserRequestDTO,
  AuthenticateUserResponseDTO
} from '../../dtos/auth/AuthenticateUserDTO'

export class AuthenticateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  public async execute({
    email,
    password
  }: AuthenticateUserRequestDTO): Promise<AuthenticateUserResponseDTO> {
    // Verifica se usuário existe
    const user = await this.usersRepository.findByEmail(email)

    if (!user) {
      throw new AppError('Email ou senha incorretos', 401)
    }

    // Verifica se a senha bate
    const passwordMatched = await compare(password, user.password)

    if (!passwordMatched) {
      throw new AppError('Email ou senha incorretos', 401)
    }

    // Gerar o Token JWT
    // O 'sub' (subject) guarda o ID do usuário.
    const { secret, expiresIn } = authConfig.jwt

    const token = sign({ role: user.role }, secret, {
      subject: String(user.id),
      expiresIn: expiresIn as any
    })

    return {
      user: {
        name: user.name,
        email: user.email,
        role: user.role
      },
      token
    } as AuthenticateUserResponseDTO
  }
}
