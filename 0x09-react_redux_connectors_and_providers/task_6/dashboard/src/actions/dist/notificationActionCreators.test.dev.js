"use strict";

var _notificationActionCreators = require("./notificationActionCreators");

var _notificationActionTypes = require("./notificationActionTypes");

describe('tests for notification action creators', function () {
  it('mark as read should return the right object', function () {
    expect((0, _notificationActionCreators.markAsRead)(1)).toEqual({
      type: _notificationActionTypes.MARK_AS_READ,
      index: 1
    });
  });
  it('setNotificationFilter should return the right object', function () {
    expect((0, _notificationActionCreators.setNotificationFilter)(_notificationActionTypes.NotificationTypeFilters["DEFAULT"])).toEqual({
      type: _notificationActionTypes.SET_TYPE_FILTER,
      filter: "DEFAULT"
    });
  });
});