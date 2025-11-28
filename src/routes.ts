import { Router } from 'express'
import { userRoutes } from './routes/users.routes'
import { authRoutes } from './routes/auth.routes'

const routes = Router()

// Root routes
routes.use('/users', userRoutes)
routes.use('/auth', authRoutes)

export { routes }
