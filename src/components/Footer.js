import React, { Component } from 'react'
import './Footer.css'

//import assets
import fbLogo from '../img/facebook-logo.png'

class Footer extends Component {
  render() {
    return(
      <ul className="list-style-n">
        <li>Organized by <a href="https://www.facebook.com/bebangladesh/">Behance Banlgadesh</a></li>
        <li>More On <a href="https://www.facebook.com/events/106525060024487"> <img src={fbLogo} alt="Facebook"/> </a></li>
      </ul>
    )
  }
}

export default Footer
