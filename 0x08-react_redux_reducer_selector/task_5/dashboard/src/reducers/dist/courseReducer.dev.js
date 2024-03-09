"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var actions = _interopRequireWildcard(require("../actions/courseActionTypes"));

var _immutable = require("immutable");

var _courses = _interopRequireDefault(require("../schema/courses"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var courseReducer = function courseReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.Map)([]);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actions.FETCH_COURSE_SUCCESS:
      {
        var normalizedData = (0, _courses["default"])(action.data);
        Object.keys(normalizedData).map(function (key) {
          normalizedData[key].isSelected = false;
        });
        return state.merge(normalizedData);
      }

    case actions.SELECT_COURSE:
      {
        return state.setIn([String(action.index), 'isSelected'], true);
      }

    case actions.UNSELECT_COURSE:
      {
        return state.setIn([String(action.index), 'isSelected'], false);
      }

    default:
      {
        return state;
      }
  }
};

var _default = courseReducer;
exports["default"] = _default;