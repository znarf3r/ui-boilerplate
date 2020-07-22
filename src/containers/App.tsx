import React, { FC } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import { MainPage } from '../pages/Main'
import { DocsPage } from '../pages/Docs'

export const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Route component={MainPage} path="/" exact />
        <Route component={DocsPage} path="/docs" />
      </Switch>
    </Router>
  )
}

export default App
