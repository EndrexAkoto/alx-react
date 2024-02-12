"use strict";

var _jquery = _interopRequireDefault(require("jquery"));

var _lodash = _interopRequireDefault(require("lodash"));

require("./body.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var count = 0;
(0, _jquery["default"])('body').append('<p>Dashboard data for the students</p>');
(0, _jquery["default"])('body').append('<button>Click here to get started</button>');
(0, _jquery["default"])('body').append("<p id='count'></p>");

function updateCounter() {
  count++;
  (0, _jquery["default"])('#count').html("".concat(count, " clicks on the button"));
}

var debounced = _lodash["default"].debounce(updateCounter, 500);

(0, _jquery["default"])('button').on('click', debounced);