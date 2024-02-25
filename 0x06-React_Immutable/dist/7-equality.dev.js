"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _immutable = require("immutable");

var areMapsEqual = function areMapsEqual(map1, map2) {
  return (0, _immutable.is)(map1, map2);
};

var _default = areMapsEqual;
exports["default"] = _default;