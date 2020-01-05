import { createStore, compose } from 'redux'
import allReducers from './reducers'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const composeEnhancers =
  (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) || compose

function configureStore() {
  let store = createStore(allReducers, composeEnhancers())


  return { store }
}

export default configureStore
