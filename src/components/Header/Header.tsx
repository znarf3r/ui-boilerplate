import React, { FC } from 'react'
import styled, { keyframes } from 'styled-components'
// import tw from 'tailwind.macro'

import logo from '../../../src/assets/img/logo.svg'

export const keyFrameExampleOne = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const ImgStyled = styled.img.attrs(({ alt, src }) => ({
  alt,
  src,
}))`
  animation: ${keyFrameExampleOne} infinite 20s linear;
`

const Header: FC = () => {
  return (
    <>
      <ImgStyled alt="logo" src={logo} />
      <h2>Welcome to React</h2>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </>
  )
}

export default Header
