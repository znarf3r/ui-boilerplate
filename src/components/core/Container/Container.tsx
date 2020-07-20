import React, { FC } from 'react'
import styled from 'styled-components'
// import tw from 'tailwind.macro'

const ContainerStyled = styled.div.attrs({
  className: 'container mx-auto px-4 h-full',
})``

const Container: FC = (props) => <ContainerStyled>{props.children}</ContainerStyled>

export default Container
