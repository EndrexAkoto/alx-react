"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppContext = exports.logOut = exports.user = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var user = {
  email: '',
  password: '',
  isLoggedIn: false
};
exports.user = user;

var logOut = function logOut() {
  user.isLoggedIn = false;
};

exports.logOut = logOut;

var AppContext = _react["default"].createContext({
  user: user,
  logOut: logOut
});

exports.AppContext = AppContext;