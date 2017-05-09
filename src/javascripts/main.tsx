import '../stylesheets/main.css'

import * as React from "react";
import * as ReactDOM from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import appReducer from './reducers/reducers'
import { fetchPapers } from './actions/actions'
import { Provider } from 'react-redux'
import AppState from './types/AppState'
import { App } from './views/App'

const loggerMiddleware = createLogger()

const store = createStore<AppState>(appReducer, applyMiddleware(thunkMiddleware, loggerMiddleware))

store.dispatch(fetchPapers())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('container')
)