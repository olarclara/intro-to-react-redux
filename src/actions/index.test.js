import * as actions from './index'

describe('actions dispatcher', () => {
  it('addTodo should dispatch ADD_TODO action', () => {
    expect(actions.addTodo('Lorem Ipsum Dolor Sit Amet', '23-08-2017'))
    .toEqual({
      type: 'ADD_TODO',
      id: 0,
      content: 'Lorem Ipsum Dolor Sit Amet',
      date: '23-08-2017'
    })
  })
})