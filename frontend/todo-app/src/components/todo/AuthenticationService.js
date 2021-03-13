import axios from 'axios'
import { API_URL } from '../../Constants.js'

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';

class AuthenticationService {

    executeBasicAuthenticationService(username, password){
        return axios.get(`${API_URL}/basicauth`, 
            {headers: {authorization: this.createBasicAuthToken(username, password)}})
    }

    executeJwtAuthenticationService(username, password){
        return axios.post(`${API_URL}/authenticate`, 
            {
                username,
                password
            })
    }

    createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ':' + password);
    }

    registerSuccessfullLogin(username, password){
        // let basicAuthHeader = 'Basic ' + window.btoa(username + ':' + password);
        // console.log('registerSuccessfullLogin');
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
        // console.log(sessionStorage);
        
        this.setupAxiosInterceptors( this.createBasicAuthToken(username, password ))
    }

    registerSuccessfullLoginForJwt(username, token){
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);

        this.setupAxiosInterceptors( this.createJwt(token))
    }

    createJwt(token){
        return 'Bearer ' + token;
    }

    logout(){
        sessionStorage.removeItem('authenticatedUser');
        console.log(sessionStorage);
    }

    isUserLoggedIn(){
        return sessionStorage.getItem('authenticatedUser');
    }

    setupAxiosInterceptors(token){
        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn){
                    config.headers.authorization = token;
                }

                return config;
            }
        )
    }
 
}

export default new AuthenticationService()