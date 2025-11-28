import { NextFunction, Request, Response } from 'express'

import { UserRole } from '../models/users/User'
import { AppError } from '../shared/errors/AppError'

// ['admin', 'manager']
export function ensureAuthorized(allowedRoles: UserRole[]) {
  return (request: Request, response: Response, next: NextFunction) => {
    const { user } = request

    // Safety: Garante que o ensureAuthenticated rodou antes
    if (!user) {
      throw new AppError('Usuário não autenticado', 401)
    }

    // Verifica se a role do usuário está na lista de permitidas
    if (!allowedRoles.includes(user.role as UserRole)) {
      throw new AppError('Acesso negado: Permissões insuficientes', 403)
    }

    return next()
  }
}
