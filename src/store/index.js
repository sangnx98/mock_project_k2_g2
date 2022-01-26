import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducers from './Reducers'

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunkMiddleware)))

export default store
