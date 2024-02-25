"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _immutable = require("immutable");

var printBestStudents = function printBestStudents(object) {
  var lazySeq = (0, _immutable.Seq)((0, _immutable.fromJS)(object)).filter(function (student) {
    return student.get('score') >= 70;
  }).map(function (student) {
    return student.update('firstName', function (firstName) {
      return firstName.charAt(0).toUpperCase() + firstName.slice(1);
    }).update('lastName', function (lastName) {
      return lastName.charAt(0).toUpperCase() + lastName.slice(1);
    });
  }); // Consider removing or replacing this console.log depending on your needs

  console.log(lazySeq.toJS());
};

var _default = printBestStudents;
exports["default"] = _default;