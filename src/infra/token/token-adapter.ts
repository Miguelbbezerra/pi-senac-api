import jwt from 'jsonwebtoken'
import { MakeToken } from '../../data/protocols/make-token'

export class TokenAdapter implements MakeToken {
  make(data: any): string {
    const expToken = Math.floor(Date.now() / 1000) + 60 * 60
    return jwt.sign(
      {
        exp: expToken,
        data
      },
      'secret'
    )
  }
}
