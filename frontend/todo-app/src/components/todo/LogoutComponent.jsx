import React, {Component} from 'react'
import { Redirect, Route } from 'react-router'
import AuthenticationService from './AuthenticationService.js'

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

export default LogoutComponent;