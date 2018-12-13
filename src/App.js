import React, { Component } from 'react';
import './App.css';
import Step from './component/step';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Step step={2}/>
        </div>
      </div>
    );
  }
}

export default App;
