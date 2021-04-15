import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import GreetCmpt from './components/Greet'

class App extends Component
{
  render() {
    return (
      <div className="App">
        <GreetCmpt />
      </div>
    );
  }
}
export default App;
