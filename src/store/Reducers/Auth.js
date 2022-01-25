const initialState = {
    isSuccess: false,
    user:{},
    isFailed: false
}
  
export default function AuthReducer(state = initialState, action) {
    switch (action.type) {
    case 'SIGNUP_SUCCESS':
        return {
            ...state,
            isSuccess: true
        }
    case 'SIGNUP_CLEAR':
        return {
            ...state,
            ...initialState.isSuccess
        }
    case 'SAVE_USER':
        return  {
            ...state,
            user: action.payload
        }
    case 'CLEAR_USER':
        return  {
            ...state,
            ...initialState.user
        }
    case 'LOGIN_FAILED':
        return {
            ...state,
            isFailed: true
        }
    default:
        return state
    }
}