"use strict";

var _uiActionCreators = require("./uiActionCreators");

var _uiActionTypes = require("./uiActionTypes");

// uiActionCreators.test.js
describe('UI Action Creators', function () {
  it('login creates the correct action', function () {
    var email = 'user@example.com';
    var password = 'password123';
    var expectedAction = {
      type: _uiActionTypes.LOGIN,
      user: {
        email: email,
        password: password
      }
    };
    expect((0, _uiActionCreators.login)(email, password)).toEqual(expectedAction);
  });
  it('logout creates the correct action', function () {
    var expectedAction = {
      type: _uiActionTypes.LOGOUT
    };
    expect((0, _uiActionCreators.logout)()).toEqual(expectedAction);
  });
  it('displayNotificationDrawer creates the correct action', function () {
    var expectedAction = {
      type: _uiActionTypes.DISPLAY_NOTIFICATION_DRAWER
    };
    expect((0, _uiActionCreators.displayNotificationDrawer)()).toEqual(expectedAction);
  });
  it('hideNotificationDrawer creates the correct action', function () {
    var expectedAction = {
      type: _uiActionTypes.HIDE_NOTIFICATION_DRAWER
    };
    expect((0, _uiActionCreators.hideNotificationDrawer)()).toEqual(expectedAction);
  });
});