"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.defaultState = void 0;

var actions = _interopRequireWildcard(require("../actions/notificationActionTypes"));

var _immutable = require("immutable");

var _notifications = require("../schema/notifications");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var defaultState = {
  notifications: [],
  filter: 'DEFAULT'
};
exports.defaultState = defaultState;

var notificationReducer = function notificationReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.Map)(defaultState);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actions.FETCH_NOTIFICATIONS_SUCCESS:
      {
        var normalized = (0, _notifications.notificationsNormalizer)(action.data);
        Object.keys(normalized.notifications).map(function (key) {
          normalized.notifications[key].isRead = false;
        });
        return state.merge(normalized);
      }

    case actions.MARK_AS_READ:
      {
        return state.setIn(['notifications', String(action.index), 'isRead'], true);
      }

    case actions.SET_TYPE_FILTER:
      {
        return state.set('filter', action.filter);
      }

    default:
      {
        return state;
      }
  }
};

var _default = notificationReducer;
exports["default"] = _default;