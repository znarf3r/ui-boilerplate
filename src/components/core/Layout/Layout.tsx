import React, { FC } from 'react'
import styled from 'styled-components'

const LayoutStyled = styled.div.attrs({
  className: 'absolute top-0 w-full h-full bg-center',
})``

const Layout: FC = (props) => (
  <LayoutStyled>
    <main>
      <section className="absolute w-full h-full bg-gray-900">{props.children}</section>
    </main>
  </LayoutStyled>
)

export default Layout
