import { Router } from 'express'

// Controllers
import { makeCreateUserController } from '../factories/users/MakeCreateUserController'
// Middlewares
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { ensureAuthorized } from '../middlewares/ensureAuthorized'
import { validateResource } from '../middlewares/validateResource'
// Models
import { UserRole } from '../models/users/User'
// Schemas
import { createUserSchema } from '../schemas/users/userSchemas'

// Instantiation
const userRoutes = Router()
const createUserController = makeCreateUserController()

// Public Routes
userRoutes.post(
  '/',
  validateResource(createUserSchema),
  createUserController.handle
)

// Private Routes
userRoutes.get('/profile', ensureAuthenticated, async (req, res) => {
  return res.json({ message: 'User profile accessed successfully.' })
})

// Private and Role-Based Routes
userRoutes.get(
  '/admin-dashboard',
  ensureAuthorized([UserRole.ADMIN]),
  (req, res) => {
    return res.json({ message: 'Welcome Admin! You have power here.' })
  }
)

export { userRoutes }
