import React, {Component} from 'react'
import{BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'
import { withRouter } from 'react-router';

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
                            <Route path="/welcome/:name" component={WelcomeComponent}></Route>
                            <Route path="/todos" component={ListTodosComponent}></Route>
                            <Route path="/logout" component={LogoutComponent} ></Route>
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


class HeaderComponent extends Component {

    render(){

        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        

        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://www.in28minutes.com" className="navbar-brand">in28minutes</a></div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/in28minutes">Home</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/todos">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>            
        )
    }
}


class FooterComponent extends Component {

    render(){
        return(
            <footer className="footer">
                <span className="text-muter">All rights reserved 2018!</span>
            </footer>
        )
    }
}


class LogoutComponent extends Component {

    render(){
        return(
            <>
                <h1>You are logged out!</h1>
                <div className="container">
                    Thank you for using our Application!
                </div>
            </>
        )
    }
}

class ListTodosComponent extends Component{

    constructor(props){
        super(props)
        this.state = {
            todos: [
                {id: 1, description: 'Learn to Dance', done: false, targerDate: new Date()},
                {id: 2, description: 'Learn React', done: false, targerDate: new Date()},
                {id: 3, description: 'Become Expert', done: false, targerDate: new Date()}
            ]
        }
    }

    render(){
        return ( 
            <div>
                <h1>List Todo</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>description</th>
                                <th>Target Date</th>
                                <th>Is Completed</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {   
                                this.state.todos.map(
                                    todo =>
                                        <tr key={todo.id}>
                                            <td>{todo.description}</td>
                                            <td>{todo.targerDate.toString()}</td>
                                            <td>{todo.done.toString()}</td>
                                        </tr>
                            )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


class WelcomeComponent extends Component{
    render(){
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome {this.props.match.params.name}. 
                    You can manage your todos <Link to="/todos">here</Link>

                </div>
            </>
        )
    }
}

function ErrorComponent() {
    return <div>An Error Occured. I don't know what to do! Contact support!</div>
}


class LoginComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            username: 'in28minutes',
            password: '',
            hasLoginFailed: false,
            showSuccessMsg: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
        // this.handleUserNameChange = this.handleChange.bind(this);
        // this.handleUserPasswordChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState(
            {
                [event.target.name]
                    :event.target.value
            }
        )
    }

    // handleUserNameChange(event){
    //     this.setState(
    //         {
    //             [event.target.name]
    //                 :event.target.value
    //         }
    //     )
    // }

    // handleUserPasswordChange(event){
    //     this.setState({password:event.target.value})
    // }

    loginClicked(){
        //in28min, dummy
        if(this.state.username === 'in28minutes' && this.state.password === 'dummy'){
            AuthenticationService.registerSuccessfullLogin(this.state.username, this.state.password)
            this.props.history.push(`/welcome/${this.state.username}`)
            // this.setState({
            //         showSuccessMsg:true, 
            //         hasLoginFailed:false
            //     })
        }else{
            console.log('Fail');
            this.setState({
                showSuccessMsg:false, 
                hasLoginFailed:true
            })
        }
        
    }

    render(){
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {/* <ShowLoginResult hasLoginFailed={this.state.hasLoginFailed} showSuccessMsg={this.state.showSuccessMsg}/> */}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {/* {this.state.showSuccessMsg && <div>Login Successful</div>} */}
                    Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
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