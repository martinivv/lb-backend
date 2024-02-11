import { NextFunction, Request, Response } from 'express'

export const errorHandler = function (error: any, req: Request, res: Response, next: NextFunction) {
  res.status(500).send(error)
  next()
}
