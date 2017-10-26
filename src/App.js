import React, { Component } from 'react'
import './App.css'
import logo from './img/logo.png'

// import components
import Sponsors from './components/Sponsors'
import Form from './components/Form'
import Footer from './components/Footer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { index : 1 }
    this.showInput = this.showInput.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  showInput(index) {
    const i         = index
    const range     = i > 0 && i <9
    const element   = document.getElementById('inputArea').children
    if(i === 0)
      element[i].classList.remove('hide')
    if(range)
      element[i - 1].classList.add('hide')
      element[i].classList.remove('hide')
  }

  handleChange() {
    const elementLength   = document.getElementById('inputArea').children.length
    const index = this.state.index

    if(index < elementLength) {
      this.setState( { index : this.state.index + 1 } )
      this.showInput(index)
    }

  }

  render() {
    return (
      <div>
        {/* Header Area */}
        <header className="section section-full-h gray-bg home-hero">
          <div className="container">
            <img src={logo} alt="Behance Bangladesh"/>
            <h1>BeReviews Dhaka#6</h1>
            <p className="sub-title">Please register yourself to get an invitation</p>
            <Form index={this.state.index} handleChange={this.handleChange} showInput={this.showInput}/>
          </div>
        </header>

        {/* Sponsors Area */}
        <div className="sp-area section">
          <div className="container">
            <Sponsors />
          </div>
        </div>

        {/* Footer Area */}
        <footer className="footer section">
          <div className="container">
            <Footer />
          </div>
        </footer>
      </div>
    )
  }
}

export default App
