import React, {Component} from 'react'
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'
class ListTodosComponent extends Component{

    constructor(props){
        super(props)
        this.state = {
            todos: [
                // {id: 1, description: 'Learn to Dance', done: false, targerDate: new Date()},
                // {id: 2, description: 'Learn React', done: false, targerDate: new Date()},
                // {id: 3, description: 'Become Expert', done: false, targerDate: new Date()}
            ]
        }
    }

    componentDidMount(){
        let username = AuthenticationService.isUserLoggedIn();
        TodoDataService.retrieveAllTodos(username)
            .then(
                response => {
                    // console.log(response);
                    this.setState({todos : response.data});
                }
            );
    }

    render(){
        return ( 
            <div>
                <h1>List Todo</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                {/* <th>id</th> */}
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
                                            <td>{todo.targetDate.toString()}</td>
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

export default ListTodosComponent;