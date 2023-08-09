import { TagStyle } from './styles'

export type Props = {
    size?: 'small' | 'big'
    children?: string
}

const Tag = ({children, size = 'small'}: Props) => {
    return (
        <TagStyle size={size}>{children}</TagStyle>
    )
}

export default Tag
