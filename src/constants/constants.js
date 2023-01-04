export const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu

export const PASSWORD_REGEXP = /[0-9a-zA-Z!@#$%^&*]{8,}/g

export const EMAIL_ERROR_TEXT = 'Укажите корректный email адрес'

export const PASSWORD_ERROR_TEXT = 'Не менее 8 символов'
