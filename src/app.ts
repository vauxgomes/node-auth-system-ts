import express, { NextFunction, Request, Response } from 'express'
// import 'express-async-errors' // Importante para o Express capturar erros em async functions | Express 5

import { routes } from './routes'
import { AppError } from './shared/errors/AppError'

const app = express()

app.use(express.json())
app.use(routes)

// Middleware Global de Tratamento de Erros
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    // Se for um erro conhecido (AppError)
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message
      })
    }

    // Se for um erro desconhecido (bug no código)
    // console.error(err)
    return response.status(500).json({
      status: 'error',
      message: 'Internal server error'
    })
  }
)

export { app }
