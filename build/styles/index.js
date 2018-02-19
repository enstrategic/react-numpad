'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _blue = require('./themes/blue');

var _blue2 = _interopRequireDefault(_blue);

var _orange = require('./themes/orange');

var _orange2 = _interopRequireDefault(_orange);

var _black_white = require('./themes/black_white');

var _black_white2 = _interopRequireDefault(_black_white);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (name) {
  var themes = { blue: _blue2.default, orange: _orange2.default, blackAndWhite: _black_white2.default };
  return themes[name] || _blue2.default;
};