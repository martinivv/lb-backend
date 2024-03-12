import { ethers } from 'ethers'
import { Request, Response, Router } from 'express'
import { Transaction } from '../../models/transaction'
import asyncMiddleware from '../middlewares/async'

const router = Router()

router.get(
  '/',
  asyncMiddleware(async (req: Request, res: Response) => {
    const transactions = await Transaction.find({})
    res.send(transactions)
  })
)

router.get(
  '/:userAddress',
  asyncMiddleware(async (req: Request, res: Response) => {
    if (!ethers.isAddress(req.params.userAddress)) return res.status(400).send('Invalid user!')

    const transactions = await Transaction.find({ from: req.params.userAddress })
    if (!transactions) return res.status(400).send('User not found!')
    res.send(transactions)
  })
)

// Ensures integrity
router.delete(
  '/all',
  asyncMiddleware(async (req: Request, res: Response) => {
    const result = await Transaction.deleteMany({})
    res.send(result)
  })
)

export default router
