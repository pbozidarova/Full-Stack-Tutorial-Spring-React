import React, {Component} from 'react'
import { Redirect, Route } from 'react-router'
import AuthenticationService from './AuthenticationService.js'

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
export default LoginComponent;