import React, { FC } from 'react'
import { Route, Switch } from 'react-router-dom'

import { ProtectedRoute } from './components/core/ProtectedRoute'
import { MainPage } from './pages/Main'
import { DocsPage } from './pages/Docs'
import { DashboardPage } from './pages/Dashboard'
import { AboutPage } from './pages/About'
import { LoginPage } from './pages/Login'

const Routes: FC = () => (
  <>
    <Switch>
      <Route component={MainPage} path="/" exact />
      <Route component={DocsPage} path="/docs" exact />
      <Route component={LoginPage} path="/login" exact />
      <ProtectedRoute Component={DashboardPage} path="/dashboard" exact />
      <ProtectedRoute Component={AboutPage} path="/about" exact />
    </Switch>
  </>
)

export default Routes
