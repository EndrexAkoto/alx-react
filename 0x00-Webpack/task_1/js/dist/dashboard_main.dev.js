"use strict";

var _jquery = _interopRequireDefault(require("jquery"));

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _jquery["default"])('body').append('<p>Holberton Dashboard</p>');
(0, _jquery["default"])('body').append('<p>Dashboard data for the students</p>');
(0, _jquery["default"])('body').append('<button>Click here to get started</button>');
(0, _jquery["default"])('body').append('<p id="count"></p>');
(0, _jquery["default"])('body').append('<p>Copyright - Holberton School</p>');

function updateCounter() {
  var count = (0, _jquery["default"])('#count').text() || 0;
  (0, _jquery["default"])('#count').text("".concat(parseInt(count) + 1, " clicks on the button"));
}

(0, _jquery["default"])('button').on('click', _lodash["default"].debounce(updateCounter, 500));