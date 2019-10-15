import React, { Component } from 'react';
import Users from './componets/Users';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Consumir <code>API REST</code> desde servidor externo y mostrar datos.
          </p>
          <a
            className="App-link"
            href="https://jsonplaceholder.typicode.com/users"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://jsonplaceholder.typicode.com/users
          </a>
        </header>
        <div>
          <Users/>
        </div>
      </div>
    );
  }
}

export default App;
