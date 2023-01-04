import './Button.css'

export enum ButtonColorType {
  BLUE = 'blue'
}

interface ButtonProps {
  children: string
  onClick?: () => void
  type?: 'button' | 'submit'
  colorType?: ButtonColorType
  disabled?: boolean
}

export const Button = ({
  children,
  onClick,
  type,
  colorType = ButtonColorType.BLUE,
  disabled
}: ButtonProps) => {
  return (
    <button
      className={`button ${disabled ? '' : colorType}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  )
}
