import React, { Component } from 'react';
import './App.css';
import logo from './img/logo.png'

class App extends Component {
  render() {
    return (
      <div>
        <header className="section section-full-h gray-bg home-hero">
          <div className="container">
            <img src={logo} alt="Behance Bangladesh"/>
            <h1>BeReviews Dhaka#6</h1>
            <p className="sub-title">Please register yourself to get an invitation</p>
          </div>
        </header>
        <div className="section"></div>
        <footer className="section"></footer>
      </div>
    );
  }
}

export default App;
