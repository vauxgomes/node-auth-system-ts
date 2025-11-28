import { Router } from 'express'

import { makeCreateUserController } from '../factories/users/MakeCreateUserController'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { ensureAuthorized } from '../middlewares/ensureAuthorized'
import { UserRole } from '../models/users/User'

const userRoutes = Router()

// Instantiation
const createUserController = makeCreateUserController()

// Public Routes
userRoutes.post('/', (req, res) => createUserController.handle(req, res))

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
