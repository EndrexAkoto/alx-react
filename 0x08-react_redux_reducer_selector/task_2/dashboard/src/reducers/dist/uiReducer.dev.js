"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.initialState = void 0;

var actions = _interopRequireWildcard(require("../actions/uiActionTypes"));

var _immutable = require("immutable");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var initialState = {
  isNotificationDrawerVisible: Boolean,
  isUserLoggedIn: Boolean,
  user: {}
};
exports.initialState = initialState;

var uiReducer = function uiReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.Map)(initialState);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actions.DISPLAY_NOTIFICATION_DRAWER:
      {
        return state.set('isNotificationDrawerVisible', true);
      }

    case actions.HIDE_NOTIFICATION_DRAWER:
      {
        return state.set('isNotificationDrawerVisible', false);
      }

    case actions.LOGIN_SUCCESS:
      {
        return state.set('isUserLoggedIn', true);
      }

    case actions.LOGIN_FAILURE:
      {
        return state.set('isUserLoggedIn', false);
      }

    case actions.LOGOUT:
      {
        return state.set('isUserLoggedIn', false);
      }

    default:
      {
        return state;
      }
  }
};

var _default = uiReducer;
exports["default"] = _default;