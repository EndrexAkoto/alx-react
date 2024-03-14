"use strict";

var _courseActionCreators = require("./courseActionCreators");

var _courseActionTypes = require("./courseActionTypes");

describe('tests for action creator', function () {
  it('selectCourse returns the right object', function () {
    expect((0, _courseActionCreators.selectCourse)(1)).toEqual({
      type: _courseActionTypes.SELECT_COURSE,
      index: 1
    });
  });
  it('unSelectCourse returns the right object', function () {
    expect((0, _courseActionCreators.unSelectCourse)(1)).toEqual({
      type: _courseActionTypes.UNSELECT_COURSE,
      index: 1
    });
  });
});