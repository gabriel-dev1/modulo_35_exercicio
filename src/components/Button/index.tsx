import { ButtonStyles } from './styles'

type Props = {
  children: string
  onClick?: () => void
  type?: 'button' | 'link'
}

const Button = ({ children, onClick }: Props) => {
  return (
    <ButtonStyles onClick={onClick}>{children}</ButtonStyles>
  )
}

export default Button
