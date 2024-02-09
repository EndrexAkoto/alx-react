import React from 'react'
import { shallow } from 'enzyme'
import CourseList from './CourseList'

const listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ]

describe('CourseList', () => {
    it('CourseList renders without crashing', () => {
        shallow(<CourseList />)
    })

    it('CourseList renders 5 rows', () => {
        const wrapper = shallow(<CourseList listCourses={listCourses} />)
        expect(wrapper.find('thead').children()).toHaveLength(2)
        expect(wrapper.find('tbody').children()).toHaveLength(3)
    })
})
