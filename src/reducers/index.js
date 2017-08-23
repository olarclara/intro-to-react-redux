const initialState = []

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          content: action.content,
          date: action.date
        }
      ]
    default:
      return state
  }
}

export default todos