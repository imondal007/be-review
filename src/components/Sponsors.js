import React, { Component } from 'react'
import './Sponsors.css'

import pathao from '../img/pathao.png'
import aiub from '../img/aiub.png'
import joomshaper from '../img/joomshaper.png'
import detroitlab from '../img/dl.png'
import magnito from '../img/magnito.png'
import augmedix from '../img/am.png'
import audacity from '../img/audacity.png'
import bronze from '../img/bronze-sp.png'
import partners from '../img/partners.png'

class Sponsors extends Component {
  render() {
    return(
        <div>
          <h2 className="styled-title"><a href="#partners">Sponsors & Partners ↓</a></h2>
          <ul className="sponsor-grid" id="partners">
            <li>
              <ul>
                <li className="col-50x">
                  <h4>Platinum Sponsor</h4>
                  <span>
                    <img src={pathao} alt="Pathao"/>
                  </span>
                </li>
                <li className="col-50x">
                  <h4>Venue Sponsor</h4>
                  <span>
                    <img src={aiub} alt="Aiub"/>
                  </span>
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <li className="col-50x">
                  <h4>Gold Sponsor</h4>
                  <span>
                    <img src={joomshaper} alt="Joomshaper"/>
                  </span>
                  <span>
                    <img src={detroitlab} alt="Detroit Lab"/>
                  </span>
                </li>
                <li className="col-50x">
                  <h4>Silver Sponsor</h4>
                  <span>
                  <img src={magnito} alt="Magnito Digital"/>
                  <img src={augmedix} alt="Augmedix"/>
                  </span>
                  <span>
                    <img src={audacity} alt="Audacity IT Solutions"/>
                  </span>
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <li className="col-50x">
                  <h4>Bronze Sponsor</h4>
                  <span>
                    <img src={bronze} alt="Bronze Sponsors"/>
                  </span>
                </li>
                <li className="col-50x">
                  <h4>Partners</h4>
                  <span>
                    <img src={partners} alt="Bronze Sponsors"/>
                  </span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
    )
  }
}

export default Sponsors
