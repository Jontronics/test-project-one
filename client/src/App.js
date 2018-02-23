import React, { Component } from 'react';
import './App.css';
import './components/project/survey.css';
import Customers from './components/customers/customers';
import Survey from './components/project/survey';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
      <Customers />
      <Survey />
      </div>
    );
  }
}

export default App;



