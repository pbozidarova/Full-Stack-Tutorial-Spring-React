import React, { Component } from 'react';
import FirstComponent from './components/learning-samples/FirstComponent';
import SecondComponent from './components/learning-samples/SecondComponent';
import ThirdComponent from './components/learning-samples/ThirdComponent';
import logo from './logo.svg';
import './App.css';
 
class App extends Component {
  render() {
    return (
      <div className="App">
          My Hello World!
          
          <FirstComponent></FirstComponent>
          <SecondComponent></SecondComponent>
          <ThirdComponent></ThirdComponent>

      </div>
    );
  }
}




export default App;