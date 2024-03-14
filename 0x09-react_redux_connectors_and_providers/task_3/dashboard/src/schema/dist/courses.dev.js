"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _normalizr = require("normalizr");

var courses = new _normalizr.schema.Entity('courses');

var coursesNormalizer = function coursesNormalizer(data) {
  var normalizedData = (0, _normalizr.normalize)(data, [courses]);
  return normalizedData.entities.courses;
};

var _default = coursesNormalizer;
exports["default"] = _default;