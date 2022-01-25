import { combineReducers } from 'redux'
import AuthReducer from './Auth'

const reducers = combineReducers({
    auth: AuthReducer,
})

export default reducers