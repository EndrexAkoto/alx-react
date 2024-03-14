"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.markAsRead = markAsRead;
exports.setNotificationFilter = setNotificationFilter;
exports.boundSetNotificationFilter = exports.boundMarkAsRead = void 0;

var _notificationActionTypes = require("./notificationActionTypes");

function markAsRead(index) {
  return {
    type: _notificationActionTypes.MARK_AS_READ,
    index: index
  };
}

;

var boundMarkAsRead = function boundMarkAsRead(index) {
  return dispatch(markAsRead(index));
};

exports.boundMarkAsRead = boundMarkAsRead;

function setNotificationFilter(filter) {
  return {
    type: _notificationActionTypes.SET_TYPE_FILTER,
    filter: filter
  };
}

;

var boundSetNotificationFilter = function boundSetNotificationFilter(filter) {
  return dispatch(setNotificationFilter(filter));
};

exports.boundSetNotificationFilter = boundSetNotificationFilter;