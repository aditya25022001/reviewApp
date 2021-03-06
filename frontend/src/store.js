import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { registerReducer, loginReducer, sendOtpReducer, resetPasswordreducer } from './reducers/authReducers'
import { getUserProfileReducer, updateUserProfileReducer } from './reducers/profileReducers'

const reducer = combineReducers({

    userRegister:registerReducer,
    userLogin : loginReducer,
    userGetOtp : sendOtpReducer,
    userResetPassword:resetPasswordreducer,

    userProfile : getUserProfileReducer,
    userUpdate : updateUserProfileReducer,
})

const userInfoFromStorage = sessionStorage.getItem('userInfo') ? JSON.parse(sessionStorage.getItem('userInfo')) : null

const initialState = {

    //lhs must be a name of a reducer in store
    userLogin : { userInfo : userInfoFromStorage }
}
const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware))) 

export default store