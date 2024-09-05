import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
export const auth = (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.headers['authorization']) {
      res.status(401).json({ message: 'usuário não possui token' })
      return res
    }
    const token = req.headers['authorization']
    const rawToken = token.replace('Bearer ', '')
    const result = jwt.verify(rawToken, 'secret')
    next()
  } catch (error) {
    res.status(401).json({ message: error.message })
    return res
  }
}
