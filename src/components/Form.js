import React, { Component } from 'react'
import './Form.css'
import axios from 'axios'

//Import assets
import next from '../img/next.png'
import nextAlt from '../img/ok.png'
import backAlt from '../img/cancel.png'

const endpoint  = 'http://128.199.79.103/behance2017/public/api/signup?'

class Form extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.confirm = this.confirm.bind(this)
  }

  handleSubmit(e) {
    
    //Preventing default behavior
    e.preventDefault()

    // User Data from registration form
    const userData = {
      name       : this.refs.name.value,
      email      : this.refs.email.value,
      phone      : this.refs.phone.value,
      behance    : this.refs.behance.value,
      why        : this.refs.why.value,
      portfolio  : this.refs.portfolio.value,
      br1        : this.refs.br1.checked ? "yes" : "no",
      br2        : this.refs.br2.checked ? "yes" : "no",
      br3        : this.refs.br3.checked ? "yes" : "no",
      review     : this.refs.yes.checked ? "yes" : "no",
      item1      : this.refs.item1.value,
      item2      : this.refs.item2.value,
      item3      : this.refs.item3.value,
    }

    //Calling handleChange function
    this.props.handleChange(userData)
  }

  confirm(e) {
    
    //Preventing default behavior
    e.preventDefault()
    const data  = this.props.data
    const url   = `${endpoint}name=${data.name}&email=${data.email}&phone=${data.phone}&behance=${data.behance}&why=${data.why}&portfolio=${data.portfolio}&br1=${data.br1}&br2=${data.br2}&br3=${data.br3}&review=${data.review}&item1=${data.item1}&item2=${data.item2}&item3=${data.item3}`
    
    axios.post(url, data)
    .then((response) => this.props.setConfirmation(response.data.success))
    .catch((error) => this.props.setError("Something went wrong! Please try again"))

  }

  componentDidMount() {
    this.props.showInput(0)
  }

  render() {
    //error msg
    const { error } = this.props

    // hints
    const hint = () => {
      if(this.props.index <= 9) {
        return 'Hit Enter to go next'
      } else if(this.props.index === 10) {
        document.getElementById('submit').classList.add('hide')
        return null
      }
      
      return 'Thanks for your interest, we will get back to you soon'
    }

    // User Data Preview
    const preview = () => {
      if(this.props.index > 9) {
        const { data } = this.props
        const info = Object.keys(data).map(x => <li key={x}><span> { x + " : "} </span> { data[x] }</li> )
        return (
          <div className="preview" id="preview">
            <h4>Does it looks good?</h4>
            <ul className="list-style-n data-list">
              {info}
            </ul>
            { error }
            <button className="inline-button next" onClick={ this.confirm }><img src={nextAlt} alt="confirm"/><span>Confirm</span></button>
            <button className="inline-button back" onClick={ this.props.edit } ><img src={ backAlt } alt="confirm"/><span>Edit</span></button>
          </div>
        )
      }
    }

    return(
      <form ref="regForm" id="form" className="form-control" onSubmit={this.handleSubmit}>
        <div id="inputArea" className="input-area">
          <div className="input hide">
            <label htmlFor="name">
              <span>Your Name</span>
              <span className="steps">Question 1/10 </span>
            </label>
            <span className="input-box">
              <input ref="name" type="text" placeholder="Please enter your full name" name="name" />
            </span>
          </div>
          <div className="input hide">
            <label htmlFor="email">
              <span>Your E-mail</span>
              <span className="steps">Question 2/10 </span>
            </label>
            <span className="input-box">
              <input ref="email" type="email" placeholder="Your valid email" name="email" />
            </span>
          </div>
          <div className="input hide">
            <label htmlFor="phone">
              <span>Your Mobile Number</span>
              <span className="steps">Question 3/10 </span>
            </label>
            <span className="input-box">
              <input ref="phone" type="text" placeholder="Without country code ( i.e: 01712345678)" name="phone" />
            </span>
          </div>
          <div className="input hide">
            <label htmlFor="behance">
              <span>Your Behance URL (If any)</span>
              <span className="steps">Question 4/10 </span>
            </label>
            <span className="input-box">
              <input ref="behance" type="text" placeholder="i.e (http://be.net/yourusername)" name="behance" />
            </span>
          </div>
          <div className="input hide">
            <label htmlFor="why">
              <span>Why do you want to participate BeReviewsDhaka#6?</span>
              <span className="steps">Question 5/10 </span>
            </label>
            <span className="input-box">
              <input ref="why" type="text" placeholder="Your short answer" name="why" />
            </span>
          </div>
          <div className="input hide">
            <label htmlFor="portfolio">
              <span>Any Other Portfolio URL(If any)</span>
              <span className="steps">Question 6/10 </span>
            </label>
            <span className="input-box">
              <input ref="portfolio" type="text" placeholder="Other portfolio (i.e: Dribbble, Your Website, etc ) " name="portfolio" />
            </span>
          </div>
          <div className="input hide">
            <label>
              <span>Did you attend any previous BeReviewsDhaka?</span>
              <span className="steps">Question 7/10 </span>
            </label>
            <span className="input-box input-like checkbox">
              <span>
                <input type="checkbox" id="none" name="pastevent" value="none" />
                <label htmlFor="none">None</label>
              </span>
              <span>
                <input ref="br1" type="checkbox" id="br1" name="pastevent" value="BeReviewsDhaka#1" />
                <label htmlFor="br1">BeReviewsDhaka#1</label>
              </span>
              <span>
                <input ref="br2" type="checkbox" id="br2" name="pastevent" value="BeReviewsDhaka#2" />
                <label htmlFor="br2">BeReviewsDhaka#2</label>
              </span>
              <span>
                <input ref="br3" type="checkbox" id="br3" name="pastevent" value="BeReviewsDhaka#3" />
                <label htmlFor="br3">BeReviewsDhaka#3</label>
              </span>
            </span>
          </div>
          <div className="input hide">
            <label>
              <span>Do you want to Review your work from experienced designer?</span>
              <span className="steps">Question 8/10 </span>
            </label>
            <span className="input-box input-like checkbox" ref="review">
              <span>
                <input ref="yes" type="radio" id="yes" name="review" value="yes" />
                <label htmlFor="yes">Yes</label>
              </span>
              <span>
                <input ref="no" type="radio" id="no" name="review" value="no" />
                <label htmlFor="no">No</label>
              </span>
            </span>
          </div>
          <div className="input hide">
            <label>
              <span>Item you want to review</span>
              <span className="steps">Question 9/10 </span>
            </label>
            <span className="input-box multiple">
              <label htmlFor="item1">Item 1</label>
              <input ref="item1" type="text" id="item1" placeholder="Please put item link & category" name="items" />
            </span>
            <span className="input-box">
              <label htmlFor="item2">Item 1</label>
              <input ref="item2" type="text" id="item2" placeholder="Please put item link & category" name="items" />
            </span>
            <span className="input-box">
              <label htmlFor="item1">Item 1</label>
              <input ref="item3" type="text" id="item3" placeholder="Please put item link & category" name="items" />
            </span>
          </div>
        </div>
        { preview() }
        <button className="inline-button" id="submit"><img src={next} alt="Next"/></button>        
        <span className="hints"> {hint()} </span>
      </form>
    )
  }
}

export default Form
