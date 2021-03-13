import axios from 'axios'

class AuthenticationService {

    executeBasicAuthenticationService(username, password){
        return axios.get('http://localhost:8080/basicauth', 
            {headers: {authorization: this.createBasicAuthToken(username, password)}})
    }

    createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ':' + password);
    }

    registerSuccessfullLogin(username, password){
        // let basicAuthHeader = 'Basic ' + window.btoa(username + ':' + password);
        // console.log('registerSuccessfullLogin');
        sessionStorage.setItem('authenticatedUser', username);
        // console.log(sessionStorage);
        
        this.setupAxiosInterceptors( this.createBasicAuthToken(username, password ))
    }

    logout(){
        sessionStorage.removeItem('authenticatedUser');
        console.log(sessionStorage);
    }

    isUserLoggedIn(){
        return sessionStorage.getItem('authenticatedUser');
    }

    setupAxiosInterceptors(basicAuthHeader){
        
        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn){
                    config.headers.authorization = basicAuthHeader;
                }

                return config;
            }
        )
    }
 
}

export default new AuthenticationService()