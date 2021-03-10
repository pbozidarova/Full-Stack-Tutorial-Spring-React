import React, {Component} from 'react'
import { Redirect, Route } from 'react-router'
import AuthenticationService from './AuthenticationService.js'


function ErrorComponent() {
    return <div>An Error Occured. I don't know what to do! Contact support!</div>
}

export default ErrorComponent;