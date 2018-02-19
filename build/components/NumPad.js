'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactPortal = require('react-portal');

var _styledComponents = require('styled-components');

var _elements = require('../elements');

var _globalCss = require('../styles/global-css');

var _globalCss2 = _interopRequireDefault(_globalCss);

var _styles = require('../styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

(0, _styledComponents.injectGlobal)(_templateObject, _globalCss2.default); // eslint-disable-line no-unused-expressions

exports.default = function (_ref) {
  var element = _ref.element,
      validation = _ref.validation,
      displayRule = _ref.displayRule,
      inputButtonContent = _ref.inputButtonContent,
      keyValid = _ref.keyValid;

  var NumPad = function (_Component) {
    _inherits(NumPad, _Component);

    function NumPad(props) {
      _classCallCheck(this, NumPad);

      var _this = _possibleConstructorReturn(this, (NumPad.__proto__ || Object.getPrototypeOf(NumPad)).call(this, props));

      _this.state = {
        show: false,
        value: props.value.toString().replace(/\D+/g, ''),
        inputCoords: {}
      };
      _this.toggleKeyPad = _this.toggleKeyPad.bind(_this);
      _this.confirm = _this.confirm.bind(_this);
      return _this;
    }

    _createClass(NumPad, [{
      key: 'toggleKeyPad',
      value: function toggleKeyPad() {
        var coords = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var updateCoords = { top: '', bottom: '', left: '', right: '' };
        var position = this.props.position;


        if (!this.state.show) {
          if (position === 'startBottomLeft') {
            updateCoords = { top: coords.bottom + 'px', left: coords.left + 'px' };
          }
          if (position === 'startBottomRight') {
            updateCoords = {
              top: coords.bottom + 'px',
              right: window.innerWidth - coords.right + 'px'
            };
          }
          if (position === 'startTopLeft') {
            updateCoords = {
              bottom: window.innerHeight - coords.top + 'px',
              left: coords.left + 'px'
            };
          }
          if (position === 'startTopRight') {
            updateCoords = {
              bottom: window.innerHeight - coords.top + 'px',
              right: window.innerWidth - coords.right + 'px'
            };
          }
        }

        this.setState(function (prevState) {
          return { show: !prevState.show, inputCoords: updateCoords };
        });
      }
    }, {
      key: 'confirm',
      value: function confirm(value) {
        var updateValue = {};
        var dateFormat = this.props.dateFormat;

        if (this.state.show && validation(value)) {
          updateValue = { value: value };
          this.props.onChange(displayRule(value, dateFormat));
        }
        this.setState(function (prevState) {
          return Object.assign({}, { show: !prevState.show }, updateValue);
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            show = _state.show,
            value = _state.value,
            inputCoords = _state.inputCoords;
        var _props = this.props,
            placeholder = _props.placeholder,
            label = _props.label,
            theme = _props.theme,
            dateFormat = _props.dateFormat,
            locale = _props.locale,
            minDate = _props.minDate,
            maxDate = _props.maxDate,
            position = _props.position;

        var customTheme = (typeof theme === 'undefined' ? 'undefined' : _typeof(theme)) === 'object' ? theme : (0, _styles2.default)(theme);
        customTheme.position = position;
        customTheme.coords = inputCoords;

        return _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            _styledComponents.ThemeProvider,
            { theme: customTheme },
            _react2.default.createElement(
              _elements.InputField,
              {
                placeholder: placeholder,
                showKeyPad: this.toggleKeyPad,
                inputValue: value,
                dateFormat: dateFormat,
                displayRule: displayRule,
                label: label,
                disabled: this.state.show,
                buttonContent: inputButtonContent,
                getPosition: this.getPosition
              },
              this.props.children
            )
          ),
          show && _react2.default.createElement(
            _reactPortal.Portal,
            null,
            _react2.default.createElement(
              _styledComponents.ThemeProvider,
              { theme: customTheme },
              _react2.default.createElement(
                _elements.Wrapper,
                null,
                _react2.default.createElement(element, {
                  cancel: this.toggleKeyPad,
                  confirm: this.confirm,
                  displayRule: displayRule,
                  validation: validation,
                  keyValid: keyValid,
                  label: label,
                  locale: locale,
                  dateFormat: dateFormat,
                  minDate: minDate,
                  maxDate: maxDate,
                  value: value
                }, null)
              )
            )
          )
        );
      }
    }]);

    return NumPad;
  }(_react.Component);

  NumPad.defaultProps = {
    children: undefined,
    placeholder: undefined,
    position: 'flex-end',
    label: undefined,
    theme: undefined,
    dateFormat: 'MM/DD/YYYY',
    locale: 'en',
    value: '',
    minDate: undefined,
    maxDate: undefined
  };

  NumPad.propTypes = {
    onChange: _propTypes2.default.func.isRequired,
    children: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.arrayOf(_propTypes2.default.element)]),
    placeholder: _propTypes2.default.string,
    position: _propTypes2.default.string,
    label: _propTypes2.default.string,
    locale: _propTypes2.default.string,
    theme: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
    dateFormat: _propTypes2.default.string,
    value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    minDate: _propTypes2.default.string,
    maxDate: _propTypes2.default.string
  };

  return NumPad;
};