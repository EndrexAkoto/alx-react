"use strict";

var _immutable = require("immutable");

var _courseSelector = require("./courseSelector");

describe('courseSelector', function () {
  it('should return a List of courses from the state', function () {
    var mockState = (0, _immutable.fromJS)({
      courses: {
        1: {
          id: 1,
          title: 'Introduction to Redux'
        },
        2: {
          id: 2,
          title: 'React and Redux'
        }
      }
    });
    var coursesList = (0, _courseSelector.getCourses)(mockState);
    expect(coursesList.size).toBe(2);
    expect(coursesList.get(0).title).toEqual('Introduction to Redux');
    expect(coursesList.get(1).title).toEqual('React and Redux');
  });
});