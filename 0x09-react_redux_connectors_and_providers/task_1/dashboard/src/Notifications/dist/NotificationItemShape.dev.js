"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var NotificationItemShape = _propTypes["default"].shape({
  id: _propTypes["default"].number.isRequired,
  type: _propTypes["default"].string.isRequired,
  html: _propTypes["default"].shape({
    __html: _propTypes["default"].string
  }),
  value: _propTypes["default"].string
});

var _default = NotificationItemShape;
exports["default"] = _default;