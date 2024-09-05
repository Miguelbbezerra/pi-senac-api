import bcrypt from 'bcrypt'
import { CompareCrypter } from 'data/protocols/compare-crypter'
export class CompareAdapter implements CompareCrypter {
  async compare(
    passwordFromUser: string,
    passwordFromDB: string
  ): Promise<boolean> {
    return await bcrypt.compare(passwordFromUser, passwordFromDB)
  }
}
