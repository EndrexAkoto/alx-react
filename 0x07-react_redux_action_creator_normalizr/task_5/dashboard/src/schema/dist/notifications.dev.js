"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _notifications = _interopRequireDefault(require("../../../../notifications.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAllNotificationsByUser = function getAllNotificationsByUser(userId) {
  var userNotifications = []; // Assuming 'result' contains all notification IDs

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _notifications["default"].result[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var notificationId = _step.value;
      var notification = _notifications["default"].entities.notifications[notificationId];

      if (notification.author === userId) {
        userNotifications.push(notification.context);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return userNotifications;
};

var _default = getAllNotificationsByUser;
exports["default"] = _default;