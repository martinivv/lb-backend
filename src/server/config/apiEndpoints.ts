import { Express, Router } from 'express'
import usersController from '../../routes/apiControllers/users'
import { errorHandler } from '../../routes/middlewares/error'

/* ========================================== APPLY MODULE ========================================== */

export default function apiEndpointsConfig(APP: Express) {
  const rootRouter = Router()

  // =========== API ENDPOINTS ========================
  rootRouter.get('/', (req, res) => res.send('Hello, World!'))

  rootRouter.use('/users', usersController)

  rootRouter.get('*', (req, res) => res.status(404).send('Page not found.'))
  // ========================

  APP.use(errorHandler)

  return rootRouter
}
