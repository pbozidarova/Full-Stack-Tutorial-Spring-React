import React, {Component} from 'react'
import{BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute';
import LoginComponent from './LoginComponent'
import ListTodosComponent from './ListTodosComponent'
import ErrorComponent from './ErrorComponent'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import LogoutComponent from './LogoutComponent'
import WelcomeComponent from './WelcomeComponent'

class TodoApp extends Component {

    render(){
        return (
            <div className="TodoApp">               
                <Router>
                    <>  
                        <HeaderComponent/>
                        <Switch>
                            <Route path="/" exact component={LoginComponent}></Route>
                            <Route path="/login" component={LoginComponent}></Route>
                            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}></AuthenticatedRoute>
                            <AuthenticatedRoute path="/todos" component={ListTodosComponent}></AuthenticatedRoute>
                            <AuthenticatedRoute path="/logout" component={LogoutComponent} ></AuthenticatedRoute>
                            <Route component={ErrorComponent}/>
                        </Switch>
                        <FooterComponent/>
                    </>
                </Router>
                
                {/* <LoginComponent></LoginComponent>
                <WelcomeComponent></WelcomeComponent> */}
            </div>
        )
    }
}

// function ShowLoginResult(props) {
//     if(props.hasLoginFailed){
//         return <div>Invalid Credentials</div>
//     } else if(props.showSuccessMsg){
//         return <div>Login Successful</div>
//     }
//     return null
// }


export default TodoApp;