import React, { Component } from 'react'
import { FormattedMessage, intlShape, injectIntl } from 'react-intl'
import { Form } from 'semantic-ui-react'
import styled from 'styled-components'

const AddButton = styled(Form.Button) `
  button {
    color: white !important;
    background: black !important;
  }
`

export class AddTodo extends Component {
  constructor(props) {
    super(props)
    this.state = { todo: '' }
    this.handleChange = this.handleChange.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleChange(e) { this.setState({ [e.target.id]: e.target.value }) }

  handleAddTodo(e) {
    if (this.state.todo.length <= 0) return

    let date = new Date().toLocaleDateString()
    this.props.addTodo(this.state.todo, date)
    this.setState({ todo: '' })
  }

  render() {
    const intl = this.props.intl

    const placeholder = intl.formatMessage({
      id: "inputPlaceholder"
    })

    return (
      <Form>
        <Form.TextArea id='todo' value={this.state.todo} onChange={this.handleChange}
          autoHeight placeholder={placeholder} />
        <AddButton type='submit' onClick={this.handleAddTodo}>
          <FormattedMessage id="trigger" />
        </AddButton>
      </Form>
    )
  }
}

AddTodo.propTypes = {
  intl: intlShape.isRequired
}

export default injectIntl(AddTodo)