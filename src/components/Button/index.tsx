import { ButtonStyles } from './styles'

export type Props = {
  children: string
  onClick?: () => void
  type: 'button' | 'link' | 'submit'
  variant: 'primary' | 'secondary'
  className?: string
  disabled?: boolean
}

const Button = ({ onClick, variant, children, type, className, disabled }: Props) => {
  return (
    <ButtonStyles
      disabled={disabled}
      className={className}
      type={type}
      variant={variant}
      onClick={onClick}
    >{children}</ButtonStyles>
  )
}

export default Button
