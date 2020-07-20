import React, { FC } from 'react'

import { MainContainer } from '../../containers/Main'
import { Layout } from '../../components/core/Layout'
import { Header } from '../../components/Header'

const MainPage: FC = () => {
  return (
    <Layout>
      <MainContainer>
        <Header />
      </MainContainer>
    </Layout>
  )
}

export default MainPage
