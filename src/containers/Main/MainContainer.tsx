import React, { FC } from 'react'

// Components
import { Container } from '../../components/core/Container'

const MainContainer: FC = (props) => {
  return <Container center>{props.children}</Container>
}

export default MainContainer
