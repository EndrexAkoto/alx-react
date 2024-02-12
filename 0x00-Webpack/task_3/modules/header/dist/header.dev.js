"use strict";

var _jquery = _interopRequireDefault(require("jquery"));

require("./header.css");

var _holbertonLogo = _interopRequireDefault(require("../../assets/holberton-logo.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Import the image and receive its resolved path as holbertonLogo
// Use the imported image path as the src attribute of an img element
(0, _jquery["default"])('body').append("<div id=\"logo\"><img src=\"".concat(_holbertonLogo["default"], "\" alt=\"Holberton Logo\"></div>"));
(0, _jquery["default"])('body').append("<h1>Holberton Dashboard</h1>");
console.log('Init header');