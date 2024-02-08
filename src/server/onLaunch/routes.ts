import { Router } from 'express'
import usersController from '../../routes/controllers/usersController'

const rootRouter = Router()

rootRouter.get('/', (req, res) => res.send('Hello, World!'))
rootRouter.use('/users', usersController)
rootRouter.get('*', (req, res) => res.status(404).send('Page not found.'))

export default rootRouter
