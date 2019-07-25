import {AsyncStorage} from 'react-native'

const initialState = {
    isLogin:false,
    user: {},
    token: '',
    isLoading:false,
    inserted: false,
}

export default user = (state = initialState, action)=>{
    switch (action.type){
        case 'POST_USER_PENDING':
        case 'POST_REGISTER_PENDING':
        case 'GET_USER_PENDING':
            return{
                ...state,
                isLoading:true,
            }
        case 'POST_USER_REJECTED':
        case 'POST_REGISTER_REJECTED':
        case 'GET_USER_REJECTED':
            return{
                ...state,
                isLoading:false,
            }
        case 'POST_USER_FULFILLED':
            //  AsyncStorage.setItem('token', action.payload.data.token)
        case 'POST_REGISTER_FULFILLED':
             AsyncStorage.setItem('token', action.payload.data.token)
            return{
                ...state,
                isLoading:false,
                isLogin:true,
                user: action.payload.data.data,
                token: action.payload.data.token
            }
        case 'GET_USER_FULFILLED':
            console.warn('usertoken',action.payload.data.data)
            return{
                ...state,
                isLoading:false,
                isLogin:true,
                user: action.payload.data.data,
                token: action.payload.data.token
            }
        default:
            return state
    }
}