import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from '@connexta/ace/react-hot-loader'
import App from './app'

const render = App => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App)

if (process.env.NODE_ENV !== 'production') {
  module.hot.accept('./app', () => {
    render(require('./app').default)
  })
}
