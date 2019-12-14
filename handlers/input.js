import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { inputChange } from '../actions'

class Input extends Component {
  inputChange = e => {
    const { inputChange, title, name } = this.props
    inputChange(title, name, e.target.value)
  }

  render() {
    return (
      <div>
        <Form.Group controlId="formBasicText">
          <Form.Label>{this.props.controlLabel}</Form.Label>
          <Form.Control
            disabled={this.props.disabled}
            type={this.props.type || 'Text'}
            placeholder={this.props.controlLabel}
            onChange={this.inputChange}
            value={this.props.val}
          />
        </Form.Group>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    inputChange: bindActionCreators(inputChange, dispatch),
  }
}

export default connect(null, mapDispatchToProps)(Input)