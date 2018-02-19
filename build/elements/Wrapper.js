'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: fixed;\n  padding: 0;\n  margin: 0;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 10000;\n'], ['\n  position: fixed;\n  padding: 0;\n  margin: 0;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 10000;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  width: 100%;\n  height: 100%;\n  font-size: 1em;\n  align-items: ', ';\n  font-family: ', ' Arial,\n    sans-serif, Helvetica;\n'], ['\n  display: flex;\n  width: 100%;\n  height: 100%;\n  font-size: 1em;\n  align-items: ', ';\n  font-family: ', ' Arial,\n    sans-serif, Helvetica;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  ', ';\n'], ['\n  ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BackgroundPanel = _styledComponents2.default.div(_templateObject);

var Container = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.theme.position;
}, function (props) {
  return props.theme.fontFamily ? props.theme.fontFamily + ',' : '';
});

var Content = _styledComponents2.default.div(_templateObject3, function (props) {
  return ['startTopLeft', 'startTopRight', 'startBottomLeft', 'startBottomRight'].includes(props.theme.position) ? '\n    position: fixed;\n    top: ' + props.theme.coords.top + ';\n    left: ' + props.theme.coords.left + ';\n    bottom: ' + props.theme.coords.bottom + ';\n    right: ' + props.theme.coords.right + ';\n    height: 250px;' : 'display: flex;\n    width: 100%;\n    justify-content: center;\n    align-items: ' + props.theme.position + ';\n    height: ' + (props.theme.position === 'center' ? '100vh' : '250px') + ';\n    background-color: ' + (0, _color2.default)(props.theme.color.secondary).alpha(0.6).string() + ';';
});

var Wrapper = function Wrapper(props) {
  return _react2.default.createElement(
    BackgroundPanel,
    null,
    _react2.default.createElement(
      Container,
      null,
      _react2.default.createElement(
        Content,
        null,
        props.children
      )
    )
  );
};

Wrapper.displayName = 'Wrapper';

Wrapper.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.array]).isRequired
};

exports.default = Wrapper;