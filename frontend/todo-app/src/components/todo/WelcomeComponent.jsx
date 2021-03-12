import React, {Component} from 'react'
import {  Link } from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService.js'

class WelcomeComponent extends Component{
    constructor(props){
        super(props)
        this.retriveWelcomeMessage = this.retriveWelcomeMessage.bind(this);
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
        
        this.state = {
            welcomeMessage : ''
        }

    }

    render(){
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome {this.props.match.params.name}. 
                    You can manage your todos <Link to="/todos">here</Link>
                </div>
                <div className="container">
                    Click here for a custom message!
                    <button onClick={this.retriveWelcomeMessage} className="btn btn-success">Get welcome message</button>
                </div>
                <div className="container">
                    <div>{this.state.welcomeMessage}</div>
                </div>
            </>
        )
    }

    retriveWelcomeMessage(){
        // HelloWorldService.executeHelloWorldService()
        //     .then( response => {
        //         // console.log(response)
        //         this.handleSuccessfulResponse(response)
        //     });

        // HelloWorldService.executeHelloWorldBeanService()
        //     .then( response => this.handleSuccessfulResponse(response));

        HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
            .then( response => this.handleSuccessfulResponse(response))
            .catch(error => this.handleError(error));

    }

    handleSuccessfulResponse(response){
        console.log(response);
        this.setState({welcomeMessage: response.data.message});
    }

    handleError(error){
        // console.log(error.response.data.message);
        this.setState({welcomeMessage: error.response.data.message});
    }
}

export default WelcomeComponent;