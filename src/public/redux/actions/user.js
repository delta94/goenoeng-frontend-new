import axios from 'axios'
const Url = 'https://menung.herokuapp.com'

export const login = (email,password,level) => {
    return {
        type: 'POST_USER',
        payload: axios.post(`${Url}/users/auth/${level}`,
        {
            email: email,
            password: password
        },{ headers: { 'x-app-name': 'menung982998372771' }})
    }
}   
export const registerUser = (email,password,name,address,phone) => {
    return {
        type: 'POST_REGISTER',
        payload: axios.post(`${Url}/users/register`,
        {
            email: email,
            password: password,
            password_confirmation: password,
            name: name,
            address: address,
            phone: phone
        },{ headers: { 'x-app-name': 'menung982998372771' }})
    }
} 
export const getUser = (token) => {
    console.warn('masuk redux', token)
    return {
        type: 'GET_USER',
        payload: axios.get(`${Url}/users/details`,
        { 
            headers: { 'x-app-name': 'menung982998372771','x-auth-token': token }})
    }
}  
export const registerPartner = (email,password,name,address,phone,latitude, longitude) => {
    return {
        type: 'POST_REGISTER',
        payload: axios.post(`${Url}/users/register`,
        {
            email: email,
            password: password,
            password_confirmation: password,
            name: name,
            address: address,
            phone: phone,
            latitude: latitude,
            longitude: longitude
        },{ headers: { 'x-app-name': 'menung982998372771' }})
    }
}  