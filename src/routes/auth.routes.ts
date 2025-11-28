import { Router } from 'express'
import { makeAuthenticateUserController } from '../factories/auth/MakeAuthenticateUserController'

const authRoutes = Router()

// Instantiation
const authenticateUserController = makeAuthenticateUserController()

// Public Routes
authRoutes.post('/login', authenticateUserController.handle)

export { authRoutes }
