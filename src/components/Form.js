import React, { Component } from 'react'
import './Form.css'

//Import assets
import next from '../img/next.png'

class Form extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.handleChange()
  }

  componentDidMount() {
    this.props.showInput(0)
  }

  render() {
    const hint = () => {
      if(this.props.index < 9) {
        return 'Hit Enter to go next'
      } else {
        document.getElementById('inputArea').classList.add('hide')
        document.getElementById('submit').classList.add('hide')
      }
      return 'Thanks for your interest, we will get back to you soon'
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
              <input type="text" placeholder="Please enter your full name" name="name" />
            </span>
          </div>
          <div className="input hide">
            <label htmlFor="email">
              <span>Your E-mail</span>
              <span className="steps">Question 2/10 </span>
            </label>
            <span className="input-box">
              <input type="email" placeholder="Your valid email" name="email" />
            </span>
          </div>
          <div className="input hide">
            <label htmlFor="phone">
              <span>Your Mobile Number (Optional) </span>
              <span className="steps">Question 3/10 </span>
            </label>
            <span className="input-box">
              <input type="text" placeholder="Without country code ( i.e: 01712345678) " name="phone" />
            </span>
          </div>
          <div className="input hide">
            <label htmlFor="behance">
              <span>Your Behance URL (If any)</span>
              <span className="steps">Question 4/10 </span>
            </label>
            <span className="input-box">
              <input type="text" placeholder="i.e (http://be.net/yourusername)" name="behance" />
            </span>
          </div>
          <div className="input hide">
            <label htmlFor="why">
              <span>Why do you want to participate BeReviewsDhaka#4?</span>
              <span className="steps">Question 5/10 </span>
            </label>
            <span className="input-box">
              <input type="text" placeholder="Your answer" name="why" />
            </span>
          </div>
          <div className="input hide">
            <label htmlFor="portfolio">
              <span>Any Other Portfolio URL(If any)</span>
              <span className="steps">Question 6/10 </span>
            </label>
            <span className="input-box">
              <input type="text" placeholder="Other portfolio (i.e: Dribbble, Your Website, etc ) " name="portfolio" />
            </span>
          </div>
          <div className="input hide">
            <label>
              <span>Did you attend any previous BeReviewsDhaka?</span>
              <span className="steps">Question 7/10 </span>
            </label>
            <span className="input-box input-like checkbox">
              <span>
                <input type="checkbox" id="br1" name="pastevent" value="BeReviewsDhaka#1" />
                <label htmlFor="br1">BeReviewsDhaka#1</label>
              </span>
              <span>
                <input type="checkbox" id="br2" name="pastevent" value="BeReviewsDhaka#2" />
                <label htmlFor="br2">BeReviewsDhaka#2</label>
              </span>
              <span>
                <input type="checkbox" id="br3" name="pastevent" value="BeReviewsDhaka#3" />
                <label htmlFor="br3">BeReviewsDhaka#3</label>
              </span>
            </span>
          </div>
          <div className="input hide">
            <label>
              <span>Do you want to Review your work from experienced designer?</span>
              <span className="steps">Question 8/10 </span>
            </label>
            <span className="input-box input-like checkbox">
              <span>
                <input type="radio" id="yes" name="review" value="Yes" />
                <label htmlFor="yes">Yes</label>
              </span>
              <span>
                <input type="radio" id="no" name="review" value="No" />
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
              <input type="text" id="item1" placeholder="Please put item link & category" name="items" />
            </span>
            <span className="input-box">
              <label htmlFor="item2">Item 1</label>
              <input type="text" id="item2" placeholder="Please put item link & category" name="items" />
            </span>
            <span className="input-box">
              <label htmlFor="item1">Item 1</label>
              <input type="text" id="item3" placeholder="Please put item link & category" name="items" />
            </span>
          </div>
        </div>
        <button className="inline-button" id="submit"><img src={next} alt="Next"/></button>
        <span className="hints"> {hint()} </span>
      </form>
    )
  }
}

export default Form
