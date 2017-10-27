import React from 'react'
import { Container } from 'semantic-ui-react'
import Header from './components/Header'
import AddTodoContainer from './containers/AddTodoContainer'
import TodoListContainer from './containers/TodoListContainer'

const App = () => (
  <Container className="App">
    <Header />
    <AddTodoContainer />
    <TodoListContainer />
  </Container>
)

export default App
