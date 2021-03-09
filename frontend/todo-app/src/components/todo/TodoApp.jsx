import React, {Component} from 'react'

class TodoApp extends Component {

    render(){
        return (
            <div className="TodoApp">
                My Todo Application
                <LoginComponent></LoginComponent>
            </div>
        )
    }
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
            console.log('Success');
            this.setState({
                    showSuccessMsg:true, 
                    hasLoginFailed:false
                })
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
                <ShowLoginResult hasLoginFailed={this.state.hasLoginFailed} showSuccessMsg={this.state.showSuccessMsg}/>
                {/* <ShowSuccessMsg showSuccessMsg={this.state.showSuccessMsg}/> */}
                Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button onClick={this.loginClicked}>Login</button>
            </div>
        )
    }

}

function ShowLoginResult(props) {
    if(props.hasLoginFailed){
        return <div>Invalid Credentials</div>
    } else if(props.showSuccessMsg){
        return <div>Login Successful</div>
    }
    return null
    
}


export default TodoApp;