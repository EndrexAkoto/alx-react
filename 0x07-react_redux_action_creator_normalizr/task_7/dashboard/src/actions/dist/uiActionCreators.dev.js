"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = login;
exports.loginRequest = loginRequest;
exports.loginFailure = exports.loginSuccess = exports.boundHideNotificationDrawer = exports.hideNotificationDrawer = exports.boundDisplayNotificationDrawer = exports.displayNotificationDrawer = exports.boundLogout = exports.logout = exports.boundLogin = void 0;

var _uiActionTypes = require("./uiActionTypes");

function login(email, password) {
  return {
    type: _uiActionTypes.LOGIN,
    user: {
      email: email,
      password: password
    }
  };
}

var boundLogin = function boundLogin(email, password) {
  return dispatch(login(email, password));
};

exports.boundLogin = boundLogin;

var logout = function logout() {
  return {
    type: _uiActionTypes.LOGOUT
  };
};

exports.logout = logout;

var boundLogout = function boundLogout() {
  return dispatch(logout());
};

exports.boundLogout = boundLogout;

var displayNotificationDrawer = function displayNotificationDrawer() {
  return {
    type: _uiActionTypes.DISPLAY_NOTIFICATION_DRAWER
  };
};

exports.displayNotificationDrawer = displayNotificationDrawer;

var boundDisplayNotificationDrawer = function boundDisplayNotificationDrawer() {
  return dispatch(displayNotificationDrawer());
};

exports.boundDisplayNotificationDrawer = boundDisplayNotificationDrawer;

var hideNotificationDrawer = function hideNotificationDrawer() {
  return {
    type: _uiActionTypes.HIDE_NOTIFICATION_DRAWER
  };
};

exports.hideNotificationDrawer = hideNotificationDrawer;

var boundHideNotificationDrawer = function boundHideNotificationDrawer() {
  return dispatch(hideNotificationDrawer());
};

exports.boundHideNotificationDrawer = boundHideNotificationDrawer;

var loginSuccess = function loginSuccess() {
  return {
    type: _uiActionTypes.LOGIN_SUCCESS
  };
};

exports.loginSuccess = loginSuccess;

var loginFailure = function loginFailure() {
  return {
    type: _uiActionTypes.LOGIN_FAILURE
  };
};

exports.loginFailure = loginFailure;

function loginRequest(email, password) {
  return function _callee(dispatch) {
    var res, json;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            boundLogin(email, password);
            _context.prev = 1;
            _context.next = 4;
            return regeneratorRuntime.awrap(fetch("http://localhost:3000/login-success.json"));

          case 4:
            res = _context.sent;
            _context.next = 7;
            return regeneratorRuntime.awrap(res.json());

          case 7:
            json = _context.sent;
            return _context.abrupt("return", dispatch(loginSuccess()));

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](1);
            return _context.abrupt("return", dispatch(loginFailure()));

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[1, 11]]);
  };
}