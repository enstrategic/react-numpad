'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  color: ', ';\n  width: 80px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 40px;\n  font-size: 1.2em;\n  font-weight: 400;\n  margin: 0;\n  padding: 0 12px;\n  border-radius: 0;\n  :active {\n    transition: all 150ms linear;\n    opacity: 0.75;\n  }\n  :active,\n  :focus {\n    outline: none;\n  }\n  :disabled {\n    color: ', ';\n    cursor: not-allowed;\n  }\n'], ['\n  color: ', ';\n  width: 80px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 40px;\n  font-size: 1.2em;\n  font-weight: 400;\n  margin: 0;\n  padding: 0 12px;\n  border-radius: 0;\n  :active {\n    transition: all 150ms linear;\n    opacity: 0.75;\n  }\n  :active,\n  :focus {\n    outline: none;\n  }\n  :disabled {\n    color: ', ';\n    cursor: not-allowed;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = _styledComponents2.default.button(_templateObject, function (props) {
  return props.theme.color.primary;
}, function (props) {
  return (0, _color2.default)(props.theme.color.primary).alpha(0.4).string();
});

Button.displayName = 'Button';

var muiTheme = (0, _getMuiTheme2.default)({
  flatButton: {
    fontSize: '1.2em'
  }
});

var ButtonWrapper = function ButtonWrapper(_ref) {
  var value = _ref.value,
      click = _ref.click,
      disabled = _ref.disabled;
  return _react2.default.createElement(
    _MuiThemeProvider2.default,
    { muiTheme: muiTheme },
    _react2.default.createElement(_FlatButton2.default, { label: '' + value, onClick: function onClick() {
        return click(value);
      }, disabled: disabled })
  );
};

ButtonWrapper.defaultProps = {
  value: undefined,
  disabled: false
};

ButtonWrapper.propTypes = {
  click: _propTypes2.default.func.isRequired,
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  disabled: _propTypes2.default.bool
};

exports.default = ButtonWrapper;