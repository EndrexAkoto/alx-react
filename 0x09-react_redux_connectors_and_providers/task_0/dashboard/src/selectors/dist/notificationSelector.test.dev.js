"use strict";

var _notificationSelector = require("./notificationSelector");

describe('notificationSelector', function () {
  var state = {
    notifications: {
      filter: 'DEFAULT',
      messages: {
        1: {
          id: 1,
          type: 'default',
          value: 'New course available',
          isRead: false
        },
        2: {
          id: 2,
          type: 'urgent',
          value: 'New resume available',
          isRead: true
        } // More notifications...

      }
    }
  };
  test('filterTypeSelected works as expected', function () {
    var filterType = (0, _notificationSelector.filterTypeSelected)(state);
    expect(filterType).toEqual('DEFAULT');
  });
  test('getNotifications returns a list of the message entities within the reducer', function () {
    var notifications = (0, _notificationSelector.getNotifications)(state);
    expect(notifications.size).toBe(Object.keys(state.notifications.messages).length);
    expect(notifications.get('1')).toEqual(state.notifications.messages['1']);
  });
  test('getUnreadNotifications return a list of the message entities within the reducer', function () {
    var unreadNotifications = (0, _notificationSelector.getUnreadNotifications)(state);
    var unreadCount = Object.values(state.notifications.messages).filter(function (message) {
      return !message.isRead;
    }).length;
    expect(unreadNotifications.size).toBe(unreadCount);
  });
});