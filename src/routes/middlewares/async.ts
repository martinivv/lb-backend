import { Request, Response } from 'express'
import { I_InputFunction } from '../../_compatibility/types/globals'

export default function (handler: I_InputFunction) {
  return async (req: Request, res: Response) => {
    try {
      await handler(req, res)
    } catch (e) {
      console.error(e)
    }
  }
}
