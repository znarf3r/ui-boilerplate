import React, { FC } from 'react'

import { MainContainer } from '../../containers/Main'
import { Layout } from '../../components/core/Layout'

const LoginPage: FC = () => {
  return (
    <Layout>
      <MainContainer>
        <p className="text-lg text-white">This is the login page</p>
      </MainContainer>
    </Layout>
  )
}

export default LoginPage
