let todoId = 0;

export const addTodo = (content, date) => ({
  type: 'ADD_TODO',
  id: todoId++,
  content,
  date
})