import { EMAIL_REGEXP, PASSWORD_REGEXP } from '../constants/constants'

export const isEmailValid = (email: string) => {
  return !!email.match(EMAIL_REGEXP)
}

export const isPasswordValid = (pass: string) => {
  return !!pass.match(PASSWORD_REGEXP)
}
