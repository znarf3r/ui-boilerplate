import React, { FC } from 'react'

import { MainContainer } from '../../containers/Main'
import { Layout } from '../../components/core/Layout'

const DashboardPage: FC = () => {
  return (
    <Layout>
      <MainContainer>
        <p className="text-lg text-white">This is the dashboard page</p>
      </MainContainer>
    </Layout>
  )
}

export default DashboardPage
