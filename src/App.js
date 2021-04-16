import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionalClick from './components/FunctionalClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreetings from './components/UserGreetings';
import NameList from './components/NameList';

class App extends Component
{
  render() {
    return (
      <div className="App">
        <NameList />
          {/*<UserGreetings />*/}
          {/*<ParentComponent />*/}
          {/*<EventBind/>*/}
      </div>
    );
  }
}
export default App;
