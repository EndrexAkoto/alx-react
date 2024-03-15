import { fromJS } from 'immutable'
import { getCourses } from './courseSelector'

describe('courseSelector', () => {
  it('should return a List of courses from the state', () => {
    const mockState = fromJS({
      courses: {
        1: { id: 1, title: 'Introduction to Redux' },
        2: { id: 2, title: 'React and Redux' },
      },
    })

    const coursesList = getCourses(mockState)
    expect(coursesList.size).toBe(2) 
    expect(coursesList.get(0).title).toEqual('Introduction to Redux')
    expect(coursesList.get(1).title).toEqual('React and Redux')
  })
})
