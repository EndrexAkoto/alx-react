"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.initialState = void 0;

var _courseReducer = _interopRequireWildcard(require("./courseReducer"));

var _notificationReducer = _interopRequireWildcard(require("./notificationReducer"));

var _uiReducer = _interopRequireWildcard(require("./uiReducer"));

var _immutable = require("immutable");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var initialState = {
  courses: (0, _immutable.Map)(_courseReducer.initialCourseState),
  notifications: (0, _immutable.Map)(_notificationReducer.initialNotificationState),
  ui: (0, _immutable.Map)(_uiReducer.initialUiState)
};
exports.initialState = initialState;
var rootReducer = {
  courses: _courseReducer["default"],
  notifications: _notificationReducer["default"],
  ui: _uiReducer["default"]
};
var _default = rootReducer;
exports["default"] = _default;