'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  background: transparent;\n  border: 0;\n  font-size: 1.2em;\n  color: ', ';\n  cursor: pointer;\n  &:focus {\n    outline: none;\n  }\n  &:hover {\n    color: yellow;\n  }\n  margin-top: -5px;\n'], ['\n  background: transparent;\n  border: 0;\n  font-size: 1.2em;\n  color: ', ';\n  cursor: pointer;\n  &:focus {\n    outline: none;\n  }\n  &:hover {\n    color: yellow;\n  }\n  margin-top: -5px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 100%;\n  background-color: ', ';\n'], ['\n  width: 100%;\n  background-color: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  height: 250px;\n  min-width: 300px;\n  max-width: 440px;\n  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 45px, rgba(0, 0, 0, 0.22) 0px 10px 18px;\n  background: ', ';\n'], ['\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  height: 250px;\n  min-width: 300px;\n  max-width: 440px;\n  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 45px, rgba(0, 0, 0, 0.22) 0px 10px 18px;\n  background: ', ';\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  height: 34px;\n  display: flex;\n  justify-content: space-between;\n  text-transform: capitalize;\n  align-items: center;\n  color: white;\n  background: ', ';\n'], ['\n  height: 34px;\n  display: flex;\n  justify-content: space-between;\n  text-transform: capitalize;\n  align-items: center;\n  color: white;\n  background: ', ';\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  display: flex;\n'], ['\n  display: flex;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  min-width: 83px;\n  text-align: center;\n'], ['\n  min-width: 83px;\n  text-align: center;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  min-width: 40px;\n  text-align: center;\n'], ['\n  min-width: 40px;\n  text-align: center;\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  flex-grow: 1;\n'], ['\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  flex-grow: 1;\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n  display: flex;\n  width: 100%;\n  background: white;\n'], ['\n  display: flex;\n  width: 100%;\n  background: white;\n']),
    _templateObject10 = _taggedTemplateLiteral(['\n  ', ' flex-grow: 1;\n  width: calc(100% * (1/7) - 1px - 0.5rem);\n  text-align: center;\n  border-right: none;\n  border-bottom: 1px solid #ddd;\n  padding: 0.25rem;\n  ', ' & {\n    border: none;\n    padding: 0.2em;\n    font-size: 0.8em;\n    :nth-child(-n + 7) {\n      border-top: none;\n    }\n  }\n  :nth-child(-n + 7) {\n    border-top: \'1px solid #ddd\';\n  }\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-transform: capitalize;\n'], ['\n  ', ' flex-grow: 1;\n  width: calc(100% * (1/7) - 1px - 0.5rem);\n  text-align: center;\n  border-right: none;\n  border-bottom: 1px solid #ddd;\n  padding: 0.25rem;\n  ', ' & {\n    border: none;\n    padding: 0.2em;\n    font-size: 0.8em;\n    :nth-child(-n + 7) {\n      border-top: none;\n    }\n  }\n  :nth-child(-n + 7) {\n    border-top: \'1px solid #ddd\';\n  }\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-transform: capitalize;\n']),
    _templateObject11 = _taggedTemplateLiteral(['\n  ', ' text-decoration: none !important;\n  cursor: pointer;\n  &:hover {\n    color: ', ';\n  }\n  &[disabled] {\n    color: ', ' !important;\n    pointer-events: none;\n    cursor: not-allowed;\n  }\n'], ['\n  ', ' text-decoration: none !important;\n  cursor: pointer;\n  &:hover {\n    color: ', ';\n  }\n  &[disabled] {\n    color: ', ' !important;\n    pointer-events: none;\n    cursor: not-allowed;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactOnclickoutside = require('react-onclickoutside');

var _reactOnclickoutside2 = _interopRequireDefault(_reactOnclickoutside);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _reactSwipeable = require('react-swipeable');

var _reactSwipeable2 = _interopRequireDefault(_reactSwipeable);

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

var _chevronLeft = require('react-icons/lib/md/chevron-left');

var _chevronLeft2 = _interopRequireDefault(_chevronLeft);

var _chevronRight = require('react-icons/lib/md/chevron-right');

var _chevronRight2 = _interopRequireDefault(_chevronRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var createDateObjects = function createDateObjects(startOfMonth) {
  var weekOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var diff = startOfMonth.weekday() - weekOffset;
  if (diff < 0) diff += 7;

  var prevMonthDays = [];
  for (var _i = 0; _i < diff; _i += 1) {
    prevMonthDays.push({
      day: startOfMonth.clone().subtract(diff - _i, 'days'),
      prevMonth: true
    });
  }

  var currentMonthDays = [];
  for (var _i2 = 1; _i2 < startOfMonth.daysInMonth() + 1; _i2 += 1) {
    currentMonthDays.push({
      day: (0, _moment2.default)([startOfMonth.year(), startOfMonth.month(), _i2])
    });
  }

  var daysAdded = prevMonthDays.length + currentMonthDays.length - 1;

  var nextMonthDays = [];
  var i = 1;
  while (daysAdded + i < 42) {
    nextMonthDays.push({
      day: currentMonthDays[currentMonthDays.length - 1].day.clone().add(i, 'days'),
      nextMonth: true
    });

    i += 1;
  }

  return [].concat(prevMonthDays, currentMonthDays, nextMonthDays);
};

var Button = _styledComponents2.default.button(_templateObject, function (props) {
  return props.theme.color.secondary;
});

var Container = _styledComponents2.default.div(_templateObject2, function (props) {
  return (0, _color2.default)(props.theme.color.secondary).alpha(0.9).string();
});

var Content = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.theme.background.primary;
});

var Header = _styledComponents2.default.div(_templateObject4, function (props) {
  return props.theme.color.primary;
});

var MonthSwitch = _styledComponents2.default.div(_templateObject5);

var MonthLabel = _styledComponents2.default.div(_templateObject6);

var YearSwitch = _styledComponents2.default.div(_templateObject5);

var YearLabel = _styledComponents2.default.div(_templateObject7);

var Days = _styledComponents2.default.div(_templateObject8);

var WeekDays = _styledComponents2.default.div(_templateObject9);

var StyledGridItem = _styledComponents2.default.div(_templateObject10, function (props) {
  return props.active ? '\n        font-weight: 700;\n        color: white;\n        background: ' + props.theme.color.secondary + ';\n        ' : '';
}, WeekDays);

var GridItemLink = StyledGridItem.withComponent('a');
// TODO: find why important is necessary
var DayGridItem = GridItemLink.extend(_templateObject11, function (props) {
  return props.prevMonth || props.nextMonth ? 'color: ' + props.theme.color.light + ';' : 'color: ' + props.theme.color.primary + ';';
}, function (props) {
  return props.theme.color.secondary;
}, function (props) {
  return (0, _color2.default)(props.theme.color.primary).alpha(0.6).string();
});

var Calendar = function (_Component) {
  _inherits(Calendar, _Component);

  function Calendar(props) {
    _classCallCheck(this, Calendar);

    var _this = _possibleConstructorReturn(this, (Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call(this, props));

    _this.currentDate = props.value ? (0, _moment2.default)(props.value, props.dateFormat).startOf('day') : (0, _moment2.default)().startOf('day');
    _this.state = {
      date: _this.currentDate.clone().startOf('day'),
      calendarMonth: _this.currentDate.clone().startOf('month')
    };
    _this.handleNextMonth = _this.handleNextMonth.bind(_this);
    _this.handlePrevMonth = _this.handlePrevMonth.bind(_this);
    _this.handleNextYear = _this.handleNextYear.bind(_this);
    _this.handlePrevYear = _this.handlePrevYear.bind(_this);
    _this.swipingLeft = _this.swipingLeft.bind(_this);
    _this.swipingRight = _this.swipingRight.bind(_this);
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(Calendar, [{
    key: 'onChange',
    value: function onChange(day) {
      var _this2 = this;

      var _props = this.props,
          confirm = _props.confirm,
          dateFormat = _props.dateFormat;

      this.setState({ date: day }, function () {
        // TODO: Find a solution to avoid streaming the value
        confirm(_this2.state.date.format(dateFormat).replace(/\D+/g, ''));
      });
    }
  }, {
    key: 'swipingLeft',
    value: function swipingLeft() {
      this.handlePrevMonth();
    }
  }, {
    key: 'swipingRight',
    value: function swipingRight() {
      this.handleNextMonth();
    }
  }, {
    key: 'handleNextMonth',
    value: function handleNextMonth() {
      this.setState(function (oldState) {
        return {
          calendarMonth: oldState.calendarMonth.add(1, 'months').startOf('month')
        };
      });
    }
  }, {
    key: 'handlePrevMonth',
    value: function handlePrevMonth() {
      this.setState(function (oldState) {
        return {
          calendarMonth: oldState.calendarMonth.subtract(1, 'months').startOf('month')
        };
      });
    }
  }, {
    key: 'handleNextYear',
    value: function handleNextYear() {
      this.setState(function (oldState) {
        return {
          calendarMonth: oldState.calendarMonth.add(1, 'year')
        };
      });
    }
  }, {
    key: 'handlePrevYear',
    value: function handlePrevYear() {
      this.setState(function (oldState) {
        return {
          calendarMonth: oldState.calendarMonth.subtract(1, 'year')
        };
      });
    }
  }, {
    key: 'handleClickOutside',
    value: function handleClickOutside(evt) {
      evt.preventDefault();
      evt.stopPropagation();
      this.props.cancel();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props2 = this.props,
          locale = _props2.locale,
          weekOffset = _props2.weekOffset,
          keyValid = _props2.keyValid,
          minDate = _props2.minDate,
          maxDate = _props2.maxDate,
          dateFormat = _props2.dateFormat;
      var _state = this.state,
          date = _state.date,
          calendarMonth = _state.calendarMonth;


      return _react2.default.createElement(
        _reactSwipeable2.default,
        { onSwipedLeft: this.swipingLeft, onSwipedRight: this.swipingRight },
        _react2.default.createElement(
          Container,
          null,
          _react2.default.createElement(
            Content,
            null,
            _react2.default.createElement(
              Header,
              null,
              _react2.default.createElement(
                MonthSwitch,
                null,
                _react2.default.createElement(
                  Button,
                  { onClick: this.handlePrevMonth },
                  _react2.default.createElement(_chevronLeft2.default, null)
                ),
                _react2.default.createElement(
                  MonthLabel,
                  null,
                  calendarMonth.locale(locale).format('MMMM')
                ),
                _react2.default.createElement(
                  Button,
                  { onClick: this.handleNextMonth },
                  _react2.default.createElement(_chevronRight2.default, null)
                )
              ),
              _react2.default.createElement(
                YearSwitch,
                null,
                _react2.default.createElement(
                  Button,
                  { onClick: this.handlePrevYear },
                  _react2.default.createElement(_chevronLeft2.default, null)
                ),
                _react2.default.createElement(
                  YearLabel,
                  null,
                  calendarMonth.locale(locale).format('YYYY')
                ),
                _react2.default.createElement(
                  Button,
                  { onClick: this.handleNextYear },
                  _react2.default.createElement(_chevronRight2.default, null)
                )
              )
            ),
            _react2.default.createElement(
              WeekDays,
              null,
              Array(7).fill().map(function (_, i) {
                return i + 1 + weekOffset;
              }).map(function (weekDay) {
                return _react2.default.createElement(
                  StyledGridItem,
                  { key: 'week-day-' + weekDay, weekDays: true },
                  (0, _moment2.default)().isoWeekday(weekDay).locale(locale).format('dd')
                );
              })
            ),
            _react2.default.createElement(
              Days,
              null,
              createDateObjects(calendarMonth, weekOffset).map(function (day) {
                return _react2.default.createElement(
                  GridItem,
                  {
                    key: 'day-' + day.day.format('DD.MM'),
                    day: day,
                    date: date,
                    onClick: _this3.onChange,
                    disabled: !keyValid(day.day, minDate, maxDate, dateFormat)
                  },
                  day.day.format('D')
                );
              })
            )
          )
        )
      );
    }
  }]);

  return Calendar;
}(_react.Component);

var GridItem = function GridItem(_ref) {
  var _onClick = _ref.onClick,
      day = _ref.day,
      date = _ref.date,
      children = _ref.children,
      disabled = _ref.disabled;
  return _react2.default.createElement(
    DayGridItem,
    {
      active: day.day.isSame(date),
      onClick: function onClick() {
        return _onClick(day.day);
      },
      nextMonth: day.nextMonth,
      prevMonth: day.prevMonth,
      disabled: disabled
    },
    children
  );
};

GridItem.propTypes = {
  onClick: _propTypes2.default.func.isRequired,
  day: _propTypes2.default.object.isRequired, // eslint-disable-line react/forbid-prop-types
  date: _propTypes2.default.object.isRequired, // eslint-disable-line react/forbid-prop-types
  children: _propTypes2.default.string.isRequired,
  disabled: _propTypes2.default.bool.isRequired
};

Calendar.propTypes = {
  confirm: _propTypes2.default.func.isRequired,
  cancel: _propTypes2.default.func.isRequired,
  weekOffset: _propTypes2.default.number,
  value: _propTypes2.default.string,
  dateFormat: _propTypes2.default.string,
  locale: _propTypes2.default.string,
  keyValid: _propTypes2.default.func.isRequired,
  minDate: _propTypes2.default.string,
  maxDate: _propTypes2.default.string
};

Calendar.defaultProps = {
  weekOffset: 0,
  value: undefined,
  dateFormat: 'MM/DD/YYYY',
  locale: 'en',
  minDate: undefined,
  maxDate: undefined
};

exports.default = (0, _reactOnclickoutside2.default)(Calendar);