export interface CompareCrypter {
  compare: (
    passwordFromUser: string,
    passwordFromDB: string
  ) => Promise<boolean>
}
