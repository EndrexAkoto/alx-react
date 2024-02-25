"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = accessImmutableObject;

var _immutable = require("immutable");

function accessImmutableObject(object, array) {
  return (0, _immutable.fromJS)(object).getIn(array, undefined);
}