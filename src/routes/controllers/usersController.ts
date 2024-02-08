import { Router, Request, Response } from 'express'
import asyncMiddleware from '../middlewares/async'

const router = Router()

router.get(
  '/:userAddress',
  asyncMiddleware(async (req: Request, res: Response) => {})
)

export default router
