import React, { Component } from 'react';
import './App.css';
import Title from './Title';
import logo from './assets/logo.svg';

// class component
class App extends Component {

  render() {
    return (
      <div className="App">

        <div className="page">
            <section>
                <img src={logo} className="App-logo" alt="logo" />
                <h1>CSS Clip Path Hover Tutorial</h1>
            </section>

            <Title text="CSS HOVER MASK" />

        </div>
      </div>
    );
  }
}

export default App;
