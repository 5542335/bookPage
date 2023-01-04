import { FormEvent, useCallback, useEffect, useState } from 'react'
import { Input, InputType } from '../UI-kit/input/Input'
import { Button } from '../UI-kit/button/Button'
import { isEmailValid, isPasswordValid } from '../../utils/utils'
import {
  EMAIL_ERROR_TEXT,
  PASSWORD_ERROR_TEXT
} from '../../constants/constants'

import './Auth.css'

export const Auth = () => {
  const [email, setEmail] = useState('')
  const [emailErrorMessage, setEmailErrorMessage] = useState('')
  const [password, setPassword] = useState('')
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('')
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    const isSubmitDisabled = isEmailValid(email) && isPasswordValid(password)

    setDisabled(!isSubmitDisabled)
  }, [email, password])

  const handleChangeEmail = useCallback(
    (mail: string) => {
      setEmail(mail)
    },
    [email]
  )

  const handleBlurEmail = useCallback(() => {
    const emailError = isEmailValid(email) ? '' : EMAIL_ERROR_TEXT

    setEmailErrorMessage(emailError)
  }, [email])

  const handleChangePassword = useCallback(
    (pass: string) => {
      setPassword(pass)
    },
    [password]
  )

  const handleBlurPassword = useCallback(() => {
    const passwordError = isPasswordValid(password) ? '' : PASSWORD_ERROR_TEXT

    setPasswordErrorMessage(passwordError)
  }, [password])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    alert(`Email - ${email}, Password - ${password}`)
    setEmail('')
    setPassword('')
  }

  return (
    <div className='container'>
      <form className='form' onSubmit={handleSubmit}>
        <h3 className='form-title'>Вход</h3>
        <p className='form-description'>Для существующих пользователей</p>
        <Input
          value={email}
          onChange={handleChangeEmail}
          onBlur={handleBlurEmail}
          label='E-mail:'
          isRequired
          errorMessage={emailErrorMessage}
        />
        <Input
          value={password}
          onChange={handleChangePassword}
          onBlur={handleBlurPassword}
          type={InputType.PASSWORD}
          label='Пароль:'
          isRequired
          errorMessage={passwordErrorMessage}
        />
        <Button type='submit' disabled={disabled}>
          Войти в систему
        </Button>
      </form>
    </div>
  )
}
