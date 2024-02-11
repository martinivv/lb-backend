import { ethers } from 'ethers'
import { Request, Response, Router } from 'express'
import { Transaction } from '../../models/transaction'
import asyncMiddleware from '../middlewares/async'

const router = Router()

/* @TODO: Configure the REST APIs for the web app. */

router.get(
  '/all',
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

export default router
