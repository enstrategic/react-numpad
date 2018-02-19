'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  color: ', ';\n'], ['\n  color: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Label = _styledComponents2.default.label(_templateObject, function (props) {
  return props.disabled ? props.theme.color.secondary : props.theme.color.primary;
});
Label.displayName = 'Label';

var InputField = function (_React$Component) {
  _inherits(InputField, _React$Component);

  function InputField(props) {
    _classCallCheck(this, InputField);

    return _possibleConstructorReturn(this, (InputField.__proto__ || Object.getPrototypeOf(InputField)).call(this, props));
  }

  _createClass(InputField, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          placeholder = _props.placeholder,
          showKeyPad = _props.showKeyPad,
          inputValue = _props.inputValue,
          dateFormat = _props.dateFormat,
          displayRule = _props.displayRule,
          getPosition = _props.getPosition,
          label = _props.label,
          disabled = _props.disabled,
          buttonContent = _props.buttonContent,
          children = _props.children;


      return _react2.default.createElement(
        _react.Fragment,
        null,
        label && _react2.default.createElement(
          Label,
          { disabled: disabled },
          label
        ),
        children ? _react2.default.Children.map(children, function (child) {
          return _react2.default.cloneElement(child, child.type === 'input' ? {
            placeholder: placeholder,
            value: inputValue ? displayRule(inputValue, dateFormat) : inputValue,
            disabled: disabled,
            readOnly: true,
            onClick: function onClick() {
              showKeyPad(_this2.inputCoords);
            },
            ref: function ref(input) {
              if (input) _this2.inputCoords = input.getBoundingClientRect();
            }
          } : {
            onClick: function onClick() {
              showKeyPad(_this2.inputCoords);
            },
            ref: function ref(input) {
              if (input) _this2.inputCoords = input.getBoundingClientRect();
            }
          });
        }) : _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement('input', {
            placeholder: placeholder,
            value: inputValue ? displayRule(inputValue, dateFormat) : inputValue,
            disabled: disabled,
            onClick: function onClick() {
              return showKeyPad(_this2.inputCoords);
            },
            ref: function ref(input) {
              if (input) _this2.inputCoords = input.getBoundingClientRect();
            },
            readOnly: true
          }),
          buttonContent && _react2.default.createElement(
            'button',
            {
              onClick: function onClick() {
                return showKeyPad(_this2.inputCoords);
              },
              ref: function ref(input) {
                if (input) _this2.inputCoords = input.getBoundingClientRect();
              }
            },
            buttonContent
          )
        )
      );
    }
  }]);

  return InputField;
}(_react2.default.Component);

InputField.displayName = 'InputField';

InputField.defaultProps = {
  placeholder: '',
  inputValue: '',
  dateFormat: 'MM/DD/YYYY',
  label: '',
  disabled: false,
  buttonContent: undefined,
  children: undefined
};

InputField.propTypes = {
  showKeyPad: _propTypes2.default.func.isRequired,
  displayRule: _propTypes2.default.func.isRequired,
  dateFormat: _propTypes2.default.string,
  inputValue: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  label: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  buttonContent: _propTypes2.default.element,
  children: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.arrayOf(_propTypes2.default.element)])
};

exports.default = InputField;