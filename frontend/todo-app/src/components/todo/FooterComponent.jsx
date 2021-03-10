import React, {Component} from 'react'
import { Redirect, Route } from 'react-router'
import AuthenticationService from './AuthenticationService.js'

class FooterComponent extends Component {

    render(){
        return(
            <footer className="footer">
                <span className="text-muter">All rights reserved 2018!</span>
            </footer>
        )
    }
}
export default FooterComponent;