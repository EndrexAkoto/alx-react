"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _enzyme = require("enzyme");

var _react = _interopRequireDefault(require("react"));

var _App = _interopRequireWildcard(require("./App"));

var _aphrodite = require("aphrodite");

var _AppContext = _interopRequireWildcard(require("./AppContext"));

var _immutable = require("immutable");

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _uiReducer = _interopRequireWildcard(require("../reducers/uiReducer"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var store = (0, _redux.createStore)(_uiReducer["default"], _uiReducer.initialState);
describe("<App />", function () {
  it("mapStateToProps returns the correct object from user Login", function () {
    var state = (0, _immutable.fromJS)({
      isUserLoggedIn: true
    });
    var result = (0, _App.mapStateToProps)(state);
    expect(result).toEqual({
      isLoggedIn: true
    });
  });
  it("mapStateToProps returns the correct object from display Drawer", function () {
    var state = (0, _immutable.fromJS)({
      isNotificationDrawerVisible: true
    });
    var result = (0, _App.mapStateToProps)(state);
    expect(result).toEqual({
      displayDrawer: true
    });
  });
});