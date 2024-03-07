"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var actions = _interopRequireWildcard(require("../actions/courseActionTypes"));

var _courseReducer = _interopRequireDefault(require("./courseReducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var data = [{
  id: 1,
  name: "ES6",
  isSelected: false,
  credit: 60
}, {
  id: 2,
  name: "Webpack",
  isSelected: false,
  credit: 20
}, {
  id: 3,
  name: "React",
  isSelected: false,
  credit: 40
}];
var action = {
  type: actions.FETCH_COURSE_SUCCESS,
  data: [{
    id: 1,
    name: "ES6",
    credit: 60
  }, {
    id: 2,
    name: "Webpack",
    credit: 20
  }, {
    id: 3,
    name: "React",
    credit: 40
  }]
};
describe('testing courseReducer', function () {
  it('returns an empty array with the default state', function () {
    expect((0, _courseReducer["default"])(undefined, {})).toEqual([]);
  });
  it('returns the data passed when FETCH_COURSE_SUCCESS is sent', function () {
    expect((0, _courseReducer["default"])(undefined, action)).toEqual(data);
  });
  it('returns the right item updated when SELECT_COURSE is sent', function () {
    expect((0, _courseReducer["default"])(data, {
      type: actions.SELECT_COURSE,
      index: 2
    })).toEqual([{
      id: 1,
      name: "ES6",
      isSelected: false,
      credit: 60
    }, {
      id: 2,
      name: "Webpack",
      isSelected: true,
      credit: 20
    }, {
      id: 3,
      name: "React",
      isSelected: false,
      credit: 40
    }]);
  });
  it('returns the right item updated when UNSELECT_COURSE is sent', function () {
    var data1 = [{
      id: 1,
      name: "ES6",
      isSelected: false,
      credit: 60
    }, {
      id: 2,
      name: "Webpack",
      isSelected: true,
      credit: 20
    }, {
      id: 3,
      name: "React",
      isSelected: false,
      credit: 40
    }];
    expect((0, _courseReducer["default"])(data1, {
      type: actions.UNSELECT_COURSE,
      index: 2
    })).toEqual([{
      id: 1,
      name: "ES6",
      isSelected: false,
      credit: 60
    }, {
      id: 2,
      name: "Webpack",
      isSelected: false,
      credit: 20
    }, {
      id: 3,
      name: "React",
      isSelected: false,
      credit: 40
    }]);
  });
});