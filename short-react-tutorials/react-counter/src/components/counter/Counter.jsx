import React, { Component } from 'react';
import './Counter.css'

//Function Component
class Counter extends Component {

    //Define the initial state in constructor!
    //state => counter 0
    
    constructor(){
        super(); //Error 1!!!
        this.state = {
            counter : 0
        }
        this.increment = this.increment.bind(this);
    }

    render() {
    return (
        <div className="counter">
            <button onClick={this.increment}>+1</button>
            <span className="count">{this.state.counter}</span>
        </div>
      );
  }

  increment(){ //Update state
    // console.log('increment');
    // this.state.counter++;
    this.setState({
        counter: this.state.counter + 1
    })
  }
    
}

export default Counter;