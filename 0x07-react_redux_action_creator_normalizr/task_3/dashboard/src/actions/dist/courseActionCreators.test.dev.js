"use strict";

var _courseActionCreators = require("./courseActionCreators");

var _courseActionTypes = require("./courseActionTypes");

// courseActionCreators.test.js
var testSelectCourse = function testSelectCourse() {
  var expectedAction = {
    type: _courseActionTypes.SELECT_COURSE,
    index: 1
  };
  console.assert(JSON.stringify((0, _courseActionCreators.selectCourse)(1)) === JSON.stringify(expectedAction), "selectCourse(1) should return ".concat(JSON.stringify(expectedAction)));
};

var testUnSelectCourse = function testUnSelectCourse() {
  var expectedAction = {
    type: _courseActionTypes.UNSELECT_COURSE,
    index: 1
  };
  console.assert(JSON.stringify((0, _courseActionCreators.unSelectCourse)(1)) === JSON.stringify(expectedAction), "unSelectCourse(1) should return ".concat(JSON.stringify(expectedAction)));
}; // Run tests


testSelectCourse();
testUnSelectCourse();