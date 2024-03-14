"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _notificationReducer = _interopRequireWildcard(require("./notificationReducer"));

var actions = _interopRequireWildcard(require("../actions/notificationActionTypes"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var data = {
  filter: "DEFAULT",
  notifications: [{
    id: 1,
    isRead: false,
    type: "default",
    value: "New course available"
  }, {
    id: 2,
    isRead: false,
    type: "urgent",
    value: "New resume available"
  }, {
    id: 3,
    isRead: false,
    type: "urgent",
    value: "New data available"
  }]
};
describe('testing notificationReducer', function () {
  it('returns the right object with default state', function () {
    expect((0, _notificationReducer["default"])(undefined, {})).toEqual(_notificationReducer.defaultState);
  });
  it('returns the right object with FETCH_NOTIFICATIONS_SUCCESS', function () {
    var action = {
      type: actions.FETCH_NOTIFICATIONS_SUCCESS,
      data: [{
        id: 1,
        type: "default",
        value: "New course available"
      }, {
        id: 2,
        type: "urgent",
        value: "New resume available"
      }, {
        id: 3,
        type: "urgent",
        value: "New data available"
      }]
    };
    var expectedData = [{
      id: 1,
      isRead: false,
      type: "default",
      value: "New course available"
    }, {
      id: 2,
      isRead: false,
      type: "urgent",
      value: "New resume available"
    }, {
      id: 3,
      isRead: false,
      type: "urgent",
      value: "New data available"
    }];
    expect((0, _notificationReducer["default"])(undefined, action)).toEqual(expectedData);
  });
  it('returns the right object with MARK_AS_READ', function () {
    var action = {
      type: actions.MARK_AS_READ,
      index: 2
    };
    var expectedData = {
      filter: "DEFAULT",
      notifications: [{
        id: 1,
        isRead: false,
        type: "default",
        value: "New course available"
      }, {
        id: 2,
        isRead: true,
        type: "urgent",
        value: "New resume available"
      }, {
        id: 3,
        isRead: false,
        type: "urgent",
        value: "New data available"
      }]
    };
    expect((0, _notificationReducer["default"])(data, action)).toEqual(expectedData);
  });
  it('returns the right object with SET_TYPE_FILTER', function () {
    var action = {
      type: actions.SET_TYPE_FILTER,
      filter: "URGENT"
    };
    var expectedData = {
      filter: "URGENT",
      notifications: [{
        id: 1,
        isRead: false,
        type: "default",
        value: "New course available"
      }, {
        id: 2,
        isRead: false,
        type: "urgent",
        value: "New resume available"
      }, {
        id: 3,
        isRead: false,
        type: "urgent",
        value: "New data available"
      }]
    };
    expect((0, _notificationReducer["default"])(data, action)).toEqual(expectedData);
  });
});