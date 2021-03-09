import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Counter.css'


class CounterButton extends Component {

    //Define the initial state in constructor!
    //state => counter 0
    
    constructor(){
        super(); //Error 1!!!
        this.state = {
            counter : 0,
            // secondCounter: 100
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    render() {
        // let style = {fontSize: "50px", padding: "15px 30px"}
        return (
            <div className="counter">
                <button onClick={this.increment}>+{this.props.by}</button>
                <button onClick={this.decrement}>-{this.props.by}</button>
                {/* <span className="count" >{this.state.counter}</span> */}
                {/* <span className="count">{this.state.secondCounter}</span> */}
            </div>
        );
  }

  increment(){ //Update state
    // console.log('increment');
    // this.state.counter++;
    this.setState({
        counter: this.state.counter + this.props.by,
        // secondCounter: this.state.secondCounter + 1
    })

    this.props.incrementMethod(this.props.by);
    
  }

  decrement(){
    this.setState(
        (prevState) => {
           return {counter: prevState.counter - this.props.by}
        }
    )

    this.props.decrementMethod(this.props.by);
}

}


CounterButton.defaultProps = {
    by : 1,     
}

CounterButton.propTypes = {
    by: PropTypes.number
}

export default CounterButton;