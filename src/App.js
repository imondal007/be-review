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
    this.state = { index : 1, data : null, confirm: null }

    this.showInput        = this.showInput.bind(this)
    this.handleChange     = this.handleChange.bind(this)
    this.edit             = this.edit.bind(this)
    this.setConfirmation  = this.setConfirmation.bind(this)
    this.setError         = this.setError.bind(this)
  }

  showInput(index) {
    const i         = index
    const range     = i > 0 && i < 9
    const element   = document.getElementById('inputArea').children
    if(i === 0) {
      element[i].classList.remove('hide')
    } else if(i >= 9 ) {
      element[i - 1].classList.add('hide')
    } else if(range) {
      element[i - 1].classList.add('hide')
      element[i].classList.remove('hide')
      element[i].children[1].children[0].focus()
    }

  }

  handleChange(userData) {
    const elementLength   = document.getElementById('inputArea').children.length
    const index           = this.state.index
    const range     = index > 0 && index < 3
    const element   = document.getElementById('inputArea').children[index -1].children[1].children[0]
    const data            = userData

    if(range && element.value.length > 0) {
      if(index <= elementLength) {
        this.setState( { index : this.state.index + 1, data : data } )
        this.showInput(index)
      }
    } else if(index === 3 && !isNaN(element.value)) {
      if(index <= elementLength) {
        this.setState( { index : this.state.index + 1, data : data } )
        this.showInput(index)
      }
    } else if(index >= 4) {
      if(index <= elementLength) {
        this.setState( { index : this.state.index + 1, data : data } )
        this.showInput(index)
      }
    }
  }

  edit() {
      this.setState( { index : 1} )
      this.showInput(0)
      document.getElementById('submit').classList.remove('hide')
  }

  setConfirmation(msg) {
    this.setState( { confirm : msg } )
    document.getElementById('preview').classList.add('hide')
  }

  setError(err) {
    this.setState( { error : err } )
  }

  render() {
    const subTitle = this.state.confirm ? this.state.confirm : "Please register yourself to get an invitation"
    return (
      <div>
        {/* Header Area */}
        <header className="section gray-bg home-hero">
          <div className="container">
            <img src={logo} alt="Behance Bangladesh"/>
            <h1>BeReviews Dhaka#6</h1>
            <p className="sub-title"> { subTitle } </p>
            <Form index={this.state.index} 
                  data={this.state.data} 
                  error={this.state.error} 
                  handleChange={this.handleChange} 
                  edit={this.edit} 
                  showInput={this.showInput}
                  setConfirmation={this.setConfirmation}
                  setError={this.setError} />
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
