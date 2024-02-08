"use strict";

var _enzyme = _interopRequireDefault(require("enzyme"));

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-18"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// setupTests.js
_enzyme["default"].configure({
  adapter: new _enzymeAdapterReact["default"]()
});