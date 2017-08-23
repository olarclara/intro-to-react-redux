import todos from './index'

describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(todos(undefined, {}))
    .toEqual([])
  })

  it('should handle add todo action', () => {
    expect(todos([], {
      type: 'ADD_TODO',
      id: 1,
      content: 'Lorem Ipsum Dolor Sit Amet',
      date: '23-08-2017'
    }))
    .toEqual([
      {
        id: 1,
        content: 'Lorem Ipsum Dolor Sit Amet',
        date: '23-08-2017'
      }
    ])

    expect(todos([
      {
        id: 2,
        content: 'This is an errand I have to run',
        date: '22-08-2017'
      }
    ], {
      type: 'ADD_TODO',
      id: 3,
      content: 'Oh, I have another errand to run',
      date: '23-08-2017'
    }))
    .toEqual([
      {
        id: 2,
        content: 'This is an errand I have to run',
        date: '22-08-2017'
      },
      {
        id: 3,
        content: 'Oh, I have another errand to run',
        date: '23-08-2017'
      }
    ])
  })
})