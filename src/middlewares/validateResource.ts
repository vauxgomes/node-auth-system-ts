import { NextFunction, Request, Response } from 'express'
import { ZodError, ZodType } from 'zod'

import { AppError } from '../shared/errors/AppError'

// O middleware recebe um schema (o formato esperado dos dados)
export const validateResource = (schema: ZodType) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      // Tenta validar o body, query ou params
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params
      })

      next()
    } catch (error) {
      if (error instanceof ZodError) {
        // Formata os erros do Zod para uma mensagem legível
        const formattedErrors = error.issues
          .map((err) => `${String(err.path[1])}: ${err.message}`)
          .join(', ')

        throw new AppError(`Erros de validação: ${formattedErrors}`, 400)
      }

      throw new AppError('Erro interno de validação', 500)
    }
  }
}
