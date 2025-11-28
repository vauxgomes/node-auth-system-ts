import { UserRole } from '../../models/users/User'

export interface AuthenticateUserRequestDTO {
  email: string
  password: string
}

export interface AuthenticateUserResponseDTO {
  user: {
    name: string
    email: string
    role: UserRole
  }
  token: string
}
