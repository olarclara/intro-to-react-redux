import React, { Component } from 'react'
import { List } from 'semantic-ui-react'
import { connect } from 'react-redux'

class TodoList extends Component {
  render() {
    return(
      <div>
        <List divided animated verticalAlign='middle'>
          {this.props.todos.map(todo =>
            <List.Item key={todo.id}>
              <List.Content>
                <List.Header as='h3'>{todo.content}</List.Header>
                <List.Description as='small'>({todo.date})</List.Description>
              </List.Content>
            </List.Item>
          )}
        </List>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state
})

export default connect(mapStateToProps)(TodoList)