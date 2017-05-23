import React, { Component } from 'react';
import './App.css';
import Input from './input';
import Hompage from './Homepage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="rectangle">
          <Input />
          <Hompage />
        </div>
      </div>
    );
  }
}

export default App;
