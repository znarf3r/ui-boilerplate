import React, { FC } from 'react'
import { Switch, BrowserRouter as Router } from 'react-router-dom'

import Routes from '../routes'

export const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Routes />
      </Switch>
    </Router>
  )
}

export default App
