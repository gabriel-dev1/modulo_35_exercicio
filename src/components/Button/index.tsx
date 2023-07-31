import { ButtonStyles } from './styles'

export type Props = {
  children: string
  onClick?: () => void
  type?: 'button' | 'link'
  variant: 'primary' | 'secondary'
}

const Button = ({ onClick, variant, children }: Props) => {
  return (
    <ButtonStyles variant={variant} onClick={onClick}>{children}</ButtonStyles>
  )
}

export default Button
