"use strict";

var _uiActionCreators = require("./uiActionCreators");

var _uiActionTypes = require("./uiActionTypes");

describe('tests for uiActionsCreators', function () {
  it('login returns right objrct', function () {
    var email = "walter@white.com";
    var password = "albequerque";
    expect((0, _uiActionCreators.login)(email, password)).toEqual({
      type: _uiActionTypes.LOGIN,
      user: {
        email: "walter@white.com",
        password: "albequerque"
      }
    });
  });
  it('logout returns the right object', function () {
    expect((0, _uiActionCreators.logout)()).toEqual({
      type: _uiActionTypes.LOGOUT
    });
  });
  it('displayNotificationDrawer returns the right object', function () {
    expect((0, _uiActionCreators.displayNotificationDrawer)()).toEqual({
      type: _uiActionTypes.DISPLAY_NOTIFICATION_DRAWER
    });
  });
  it('hideNotificationDrawer returns the right object', function () {
    expect((0, _uiActionCreators.hideNotificationDrawer)()).toEqual({
      type: _uiActionTypes.HIDE_NOTIFICATION_DRAWER
    });
  });
});