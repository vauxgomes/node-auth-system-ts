import { Router } from 'express'
import { makeCreateUserController } from '../factories/users/MakeCreateUserController'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const userRoutes = Router()

// Instantiation
const createUserController = makeCreateUserController()

// Public Routes
userRoutes.post('/', (req, res) => createUserController.handle(req, res))

// Private Routes
userRoutes.get('/profile', ensureAuthenticated, async (req, res) => {
  return res.json({ message: 'User profile accessed successfully.' })
})

export { userRoutes }
