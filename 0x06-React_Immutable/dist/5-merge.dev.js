"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeElements = exports.concatElements = void 0;

var _immutable = require("immutable");

var concatElements = function concatElements(page1, page2) {
  return (0, _immutable.List)(page1.concat(page2));
};

exports.concatElements = concatElements;

var mergeElements = function mergeElements(page1, page2) {
  var mergedMap = (0, _immutable.Map)(page1).merge((0, _immutable.Map)(page2));
  return (0, _immutable.List)(mergedMap.values());
};

exports.mergeElements = mergeElements;