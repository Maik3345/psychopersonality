import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Psycho Personality
          </p>
          <Button variant="contained"  color="primary">Start the game</Button>
        </header>
      </div>
    );
  }
}

export default App;
