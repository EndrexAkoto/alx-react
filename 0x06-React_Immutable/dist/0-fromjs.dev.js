"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _immutable = require("immutable");

var getImmutableObject = function getImmutableObject(object) {
  return (0, _immutable.fromJS)(object);
};

var _default = getImmutableObject;
exports["default"] = _default;