import React, { FC } from 'react'

import { MainContainer } from '../../containers/Main'
import { Layout } from '../../components/core/Layout'
import { Example } from '../../components/Example'

const MainPage: FC = () => {
  return (
    <Layout>
      <MainContainer>
        <Example />
      </MainContainer>
    </Layout>
  )
}

export default MainPage
