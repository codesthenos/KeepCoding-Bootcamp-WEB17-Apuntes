import styled from 'styled-components'

const accentColor = 'rgb(29, 161, 242)'

const Button = styled.button<{ $variant: "primary" | "secondary"}>`
  background-color: ${props => props.$variant === 'primary' ? accentColor : 'red'};
  padding-inline: .5rem;
  border-radius: 10px;
  margin-top: 1rem;
  margin-left: 40%;
`

export default Button