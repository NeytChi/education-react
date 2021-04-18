import React, { Component } from 'react'
import './App.css';
import './components/appStyles.css'
import ErrorBoundary from './components/ErrorBoundary';
import Hero from './components/Hero';
import PortalDemo from './components/PortalDemo';

class App extends Component
{
  render() {
    return (
      <div className="App">
        <ErrorBoundary>
          <Hero heroName = "Batman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName = "Superman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName = "Joker" />
        </ErrorBoundary>
      </div>
    );
  }
}
export default App;
