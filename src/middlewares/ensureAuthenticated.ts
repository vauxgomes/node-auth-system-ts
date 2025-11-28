import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
import authConfig from '../config/auth'
import { ITokenPayload } from '../dtos/auth/ITokenPayload'
import { AppError } from '../shared/errors/AppError'

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): void {
  // Recebe o token que vem pelo Header
  const authHeader = request.headers.authorization

  if (!authHeader) {
    throw new AppError('JWT Token não informado', 401)
  }

  // ["Bearer", "TOKEN_AQUI"]
  const [, token] = authHeader.split(' ')

  try {
    // Válidade do Token
    const { secret } = authConfig.jwt
    const decoded = verify(token as string, secret)

    // Casting do payload
    const { sub, role } = decoded as ITokenPayload

    // Anexa o ID do usuário na requisição
    request.user = {
      id: sub,
      role
    }

    return next()
  } catch {
    throw new AppError('JWT Token inválido', 401)
  }
}
