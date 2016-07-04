import React, { Component } from 'react'

import Uploader from './uploader'

class Form extends Component {
  render() {
    return (
      <div>
        <h4 className="page-header">Fill in the Fields</h4>
        <Uploader />
      </div>
    )
  }
}

export default Form
