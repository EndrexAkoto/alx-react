"use strict";

require("@testing-library/jest-dom");

var _enzyme = require("enzyme");

var _enzymeAdapterReact = _interopRequireDefault(require("@cfaester/enzyme-adapter-react-18"));

var _util = _interopRequireDefault(require("util"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
Object.defineProperty(global, 'TextEncoder', {
  value: _util["default"].TextEncoder
});
(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact["default"]()
});