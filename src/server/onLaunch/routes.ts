import { Router } from 'express'

const rootRouter = Router()

rootRouter.get('/', (req, res) => res.send('Hello, World!'))
// rootRouter.use("/users", {CONTROLLER})
rootRouter.get('*', (req, res) => res.status(404).send('Page not found.'))

export default rootRouter
