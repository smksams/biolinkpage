import { Container } from './styles.js'

export function ButtonText({text,iconSize, link ,icon: Icon , ...rest}) {
  
  return(
    <Container
    href={link}
    {...rest}
    target="_blank"
    >
      {Icon && <Icon size={iconSize} />}
      {text}
    </Container>
  )
}