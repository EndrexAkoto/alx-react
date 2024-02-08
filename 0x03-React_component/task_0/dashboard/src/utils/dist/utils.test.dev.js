"use strict";

var utils = require('./utils');

test('return current year', function () {
  var currentYear = new Date().getFullYear();
  expect(utils.getFullYear()).toBe(currentYear);
});
test('return footer with isIndex=true', function () {
  var isIndex = true;
  expect(utils.getFooterCopy(isIndex)).toBe("Holberton School");
});
test('return footer with isIndex=false', function () {
  var isIndex = false;
  expect(utils.getFooterCopy(isIndex)).toBe("Holberton School main dashboard");
});
test('return correct latest notification', function () {
  expect(utils.getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
});