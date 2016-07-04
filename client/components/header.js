import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'

import Accounts from './accounts'

class Header extends Component {
  onCreateClick(event) {
    event.preventDefault()
    Meteor.call('products.insert', (error, result) => {
      browserHistory.push(`products/${result}`)
    })
  }
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">Ecommerce</Link>
          </div>
          <ul className="nav navbar-nav">
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/services">Services</Link>
            </li>
            <li>
                <Link to="#">Contact</Link>
            </li>
            <li>
                <a
                  onClick={this.onCreateClick.bind(this)}
                  href="#"
                >
                Create Product
                </a>
            </li>
            <li>
              <Accounts />
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header
