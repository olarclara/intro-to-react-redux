import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'

class Header extends Component {
  render() {
    return(
      <div>
        <h1>
          <span role='img' aria-label='notes'>📝️</span>
          <FormattedMessage id="header" />
        </h1>
      </div>
    )
  }
}

export default Header
