import { Router } from 'express'
import { makeCreateUserController } from '../factories/users/MakeCreateUserController'

const userRoutes = Router()

// Instantiation
const createUserController = makeCreateUserController()

// Public Routes
userRoutes.post('/', (req, res) => createUserController.handle(req, res))

export { userRoutes }
