require("./assets/styles/app.scss")
import React from 'react'
import { render } from "react-dom"
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import { AppRoute } from './routes'
import { AppReducer } from './reducers'
import thunk from 'redux-thunk'

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

const initStore = (reducers, state) => {
  return createStore(
    reducers,
    state,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )
}

const store = initStore(AppReducer, window.__INITIAL_STATE__)

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={AppRoute}/>
  </Provider>
  , document.getElementById('app')
)
