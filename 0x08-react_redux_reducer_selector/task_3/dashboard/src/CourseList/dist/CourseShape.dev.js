"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CourseShape = _propTypes["default"].shape({
  id: _propTypes["default"].number.isRequired,
  name: _propTypes["default"].string.isRequired,
  credit: _propTypes["default"].number.isRequired
});

var _default = CourseShape;
exports["default"] = _default;