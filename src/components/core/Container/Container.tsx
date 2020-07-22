import React, { FC } from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

type ContainerProps = {
  center: boolean
}

const ContainerStyled = styled.div<{ center: boolean }>`
  & {
    ${tw`mx-auto px-4 h-full`}
    ${(props) => (props.center ? tw`flex flex-col items-center justify-center` : '')}
  }
`

const Container: FC<ContainerProps> = (props) => (
  /** @TODO: Using a classname here because of issue https://github.com/bradlc/babel-plugin-tailwind-components/pull/2 */
  <ContainerStyled center={props.center} className="container">
    {props.children}
  </ContainerStyled>
)

export default Container
