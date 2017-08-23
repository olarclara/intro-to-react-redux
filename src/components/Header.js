import React, { Component } from 'react'
import './Header.css'

class Header extends Component {
  render() {
    return(
      <div className="Header">
        <h1>
          <span role='img' aria-label='notes'>📝️</span>
          To Do List
        </h1>
      </div>
    )
  }
}

export default Header
