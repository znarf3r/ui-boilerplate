import React, { FC } from 'react'
import ReactDOM from 'react-dom'

import './assets/styles/styles.css'
import { App } from './containers/App'
import * as serviceWorker from './serviceWorker'

const render = (Component: FC) => {
  ReactDOM.render(
    // <Provider store={store}>
    //   <ConnectedRouter history={history}>
    <Component />,
    //   </ConnectedRouter>
    // </Provider>,
    document.getElementById('root'),
  )
}

render(App)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
