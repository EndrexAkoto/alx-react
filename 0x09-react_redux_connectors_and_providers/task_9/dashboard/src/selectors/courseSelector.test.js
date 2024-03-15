import { createSelector } from 'reselect'

const getCoursesState = (state) => state.courses

export const getCourses = createSelector([getCoursesState], (courses) => {
  return courses.valueSeq().toList()
}
