import { Container } from './styles'

type Props = {
  children: JSX.Element
}

const Section = ({ children }: Props) => {
  return (
    <Container>{children}</Container>
  )
}

export default Section
