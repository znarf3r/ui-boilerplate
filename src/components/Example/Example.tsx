import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

import logoSVG from '../../assets/img/logo.svg'

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

const Example: FC = () => {
  return (
    <>
      <ImgStyled alt="logo" src={logoSVG} />
      <h2 className="text-white text-2xl p-5 h-20">Welcome to ui-boilerplate made with React</h2>
      <p className="text-lg text-white">To get started, follow one of the links below:</p>
      <ul className="flex flex-wrap list-none md:justify-end  justify-center p-10">
        <li>
          <Link
            className="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3"
            to="/docs"
          >
            Docs
          </Link>
        </li>
        <li>
          <Link
            className="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3"
            to="/dashboard"
          >
            Dashboard [Secure route]
          </Link>
        </li>
        <li>
          <Link
            className="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3"
            to="/about"
          >
            About [Secure route]
          </Link>
        </li>
        <li>
          <Link
            className="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3"
            to="/login"
          >
            Login
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Example
