import React, { FC } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { MainPage } from '../pages/Main'

export const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Route component={MainPage} path="/" />
      </Switch>
    </Router>
  )
}

export default App
