import { Router } from 'express'

// Controllers
import { makeAuthenticateUserController } from '../factories/auth/MakeAuthenticateUserController'
// Middlewares
import { validateResource } from '../middlewares/validateResource'
// Schemas
import { loginSchema } from '../schemas/auth/authSchemas'

// Instantiation
const authRoutes = Router()
const authenticateUserController = makeAuthenticateUserController()

// Public Routes
authRoutes.post(
  '/login',
  validateResource(loginSchema),
  authenticateUserController.handle
)

export { authRoutes }
