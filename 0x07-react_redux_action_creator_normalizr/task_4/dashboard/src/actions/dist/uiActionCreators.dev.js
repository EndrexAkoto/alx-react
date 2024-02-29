"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hideNotificationDrawer = exports.displayNotificationDrawer = exports.logout = exports.login = void 0;

var _uiActionTypes = require("./uiActionTypes");

// src/actions/uiActionCreators.js
var login = function login(email, password) {
  return {
    type: _uiActionTypes.LOGIN,
    user: {
      email: email,
      password: password
    }
  };
};

exports.login = login;

var logout = function logout() {
  return {
    type: _uiActionTypes.LOGOUT
  };
};

exports.logout = logout;

var displayNotificationDrawer = function displayNotificationDrawer() {
  return {
    type: _uiActionTypes.DISPLAY_NOTIFICATION_DRAWER
  };
};

exports.displayNotificationDrawer = displayNotificationDrawer;

var hideNotificationDrawer = function hideNotificationDrawer() {
  return {
    type: _uiActionTypes.HIDE_NOTIFICATION_DRAWER
  };
};

exports.hideNotificationDrawer = hideNotificationDrawer;