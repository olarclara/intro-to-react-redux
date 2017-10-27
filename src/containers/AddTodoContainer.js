import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addTodo } from '../actions'
import AddTodo from '../components/AddTodo'

const mapDispatchToProps = dispatch => bindActionCreators({
  addTodo: addTodo
}, dispatch)

export default connect(null, mapDispatchToProps)(AddTodo)