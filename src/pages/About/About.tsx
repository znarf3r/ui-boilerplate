import React, { FC } from 'react'

import { MainContainer } from '../../containers/Main'
import { Layout } from '../../components/core/Layout'

const AboutPage: FC = () => {
  return (
    <Layout>
      <MainContainer>
        <p className="text-lg text-white">This is the about page</p>
      </MainContainer>
    </Layout>
  )
}

export default AboutPage
