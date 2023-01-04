import './Input.css'

export enum InputType {
  EMAIL = 'email',
  PASSWORD = 'password'
}

interface InputProps {
  value: string
  onChange: (arg: string) => void
  onBlur?: () => void
  type?: InputType
  label?: string
  isRequired?: boolean
  errorMessage?: string
}

export const Input = ({
  value,
  onChange,
  onBlur,
  type = InputType.EMAIL,
  label,
  isRequired,
  errorMessage
}: InputProps) => {
  return (
    <div className='input-container'>
      <label>
        {label && (
          <p>
            {label}
            {isRequired && <span className='input-required'>*</span>}
          </p>
        )}
        <input
          className={`input ${errorMessage && 'input-invalid'}`}
          type={type}
          value={value}
          onChange={e => onChange(e.target.value)}
          onBlur={onBlur}
        />
      </label>
      {errorMessage && <p className='error-message'>{errorMessage}</p>}
    </div>
  )
}
