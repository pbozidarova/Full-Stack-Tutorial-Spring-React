class AuthenticationService {

    registerSuccessfullLogin(username, password){
        console.log('registerSuccessfullLogin');
        sessionStorage.setItem('authenticatedUser', username);
        console.log(sessionStorage);
    }

    logout(){
        sessionStorage.removeItem('authenticatedUser');
        console.log(sessionStorage);
    }

    isUserLoggedIn(){
        return sessionStorage.getItem('authenticatedUser');
    }

 

}

export default new AuthenticationService()