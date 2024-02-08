import { Request, Response, NextFunction } from 'express'

interface InputFunction {
  (req: Request, res: Response, next?: NextFunction): Promise<void> | void
}

export default function (handler: InputFunction) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await handler(req, res, next)
    } catch (e) {
      next(e)
    }
  }
}
