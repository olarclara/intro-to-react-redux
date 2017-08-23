import React from 'react'
import { Container } from 'semantic-ui-react'
import Header from './Header'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

const App = () => (
  <Container className="App">
    <Header />
    <AddTodo />
    <TodoList />
  </Container>
)

export default App
