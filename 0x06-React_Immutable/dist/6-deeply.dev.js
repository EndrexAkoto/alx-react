"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _immutable = require("immutable");

var mergeDeeplyElements = function mergeDeeplyElements(page1, page2) {
  return (0, _immutable.Map)(page1).mergeDeep((0, _immutable.Map)(page2));
};

var _default = mergeDeeplyElements;
exports["default"] = _default;