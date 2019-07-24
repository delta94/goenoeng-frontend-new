import {AsyncStorage} from 'react-native'

const initialState = {
    isLogin:false,
    user: {},
    token: '',
    isLoading:false,
    inserted: false,
}

export default user = (state = initialState, action)=>{
    switch(action.type){
        case 'POST_USER_PENDING':
        case 'POST_REGISTER_PENDING':
            return{
                ...state,
                isLoading:true,
            }
        case 'POST_USER_REJECTED':
        case 'POST_REGISTER_REJECTED':
            return{
                ...state,
                isLoading:false,
            }
        case 'POST_USER_FULFILLED':
        case 'POST_REGISTER_FULFILLED':
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