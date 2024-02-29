"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.markAsAread = markAsAread;
exports.setNotificationFilter = setNotificationFilter;

var _notificationActionTypes = require("./notificationActionTypes");

function markAsAread(index) {
  return {
    type: _notificationActionTypes.MARK_AS_READ,
    index: index
  };
}

function setNotificationFilter(filter) {
  return {
    type: _notificationActionTypes.SET_TYPE_FILTER,
    filter: filter
  };
}