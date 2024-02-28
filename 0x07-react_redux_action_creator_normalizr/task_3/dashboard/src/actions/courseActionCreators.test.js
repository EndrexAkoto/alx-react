// courseActionCreators.test.js
import { selectCourse, unSelectCourse } from './courseActionCreators'
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes'

const testSelectCourse = () => {
  const expectedAction = { type: SELECT_COURSE, index: 1 }
  console.assert(JSON.stringify(selectCourse(1)) === JSON.stringify(expectedAction), `selectCourse(1) should return ${JSON.stringify(expectedAction)}`)
}

const testUnSelectCourse = () => {
  const expectedAction = { type: UNSELECT_COURSE, index: 1 }
  console.assert(JSON.stringify(unSelectCourse(1)) === JSON.stringify(expectedAction), `unSelectCourse(1) should return ${JSON.stringify(expectedAction)}`)
}

// Run tests
testSelectCourse()
testUnSelectCourse()
