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
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './components/appStyles.css'
import styles from './components/appStyles.module.css'
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';

class App extends Component
{
  render() {
    return (
      <div className="App">
          <Table />
          {/*<FragmentDemo />*/}
          {/*<LifecycleA />*/}
          {/*<h1 className='error'>Error</h1>*/}
          {/*<h1 className={styles.success}>Success</h1>*/}
          {/*<Stylesheet primary={true} />*/}
          {/*<Inline />*/}
          {/*<NameList />*/}
          {/*<UserGreetings />*/}
          {/*<ParentComponent />*/}
          {/*<EventBind/>*/}
      </div>
    );
  }
}
export default App;
