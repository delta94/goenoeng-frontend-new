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
export const register = (email,password,name,address,phone) => {
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