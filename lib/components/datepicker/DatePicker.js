var __extends =
  (this && this.__extends) ||
  (function() {
    var extendStatics = function(d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(d, b) {
            d.__proto__ = b;
          }) ||
        function(d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function(d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
import * as React from 'react';
import * as PropTypes from 'prop-types';
import Icon from '../icon/Icon';
import { parseDateString, classes } from '../utils';
import Transition from '../transition/Transition';
import DatePanel from './DatePanel';
import MonthPanel from './MonthPanel';
import YearPanel from './YearPanel';
import DecadePanel from './DecadePanel';
var componentName = 'DatePicker';
var DatePicker = /** @class */ (function(_super) {
  __extends(DatePicker, _super);
  function DatePicker(props) {
    var _this = _super.call(this, props) || this;
    _this.handleClickDocument = function(e) {
      var calendarVisible = _this.state.calendarVisible;
      var target = e.target;
      if (!_this.datePickerRef.contains(target) && calendarVisible) {
        _this.setState({
          calendarVisible: false,
        });
      }
    };
    _this.saveDatePickerRef = function(node) {
      _this.datePickerRef = node;
    };
    // 监听点击 input 打开 calendar 面板
    _this.handleClickInput = function() {
      _this.setState({
        calendarVisible: true,
        mode: 'date',
      });
    };
    // 调用 onChange 回调
    _this.handleOnChange = function() {
      var onChange = _this.props.onChange;
      var derivedValue = _this.state.derivedValue;
      if (onChange) {
        if (derivedValue) {
          var year = derivedValue.year,
            month = derivedValue.month,
            date = derivedValue.date;
          onChange(
            year +
              '-' +
              _this.fixNumberToString(month) +
              '-' +
              _this.fixNumberToString(date),
            derivedValue,
          );
        } else {
          onChange('', null);
        }
      }
    };
    // 监听 date 面板点击
    _this.handleClickDate = function(value) {
      _this.setState(
        {
          derivedValue: value,
          pickerValue: value,
          calendarVisible: false,
        },
        _this.handleOnChange,
      );
    };
    // 监听点击 date 面板设置为今天
    _this.handleClickToday = function() {
      _this.setState(
        {
          derivedValue: parseDateString(),
          pickerValue: parseDateString(),
          calendarVisible: false,
        },
        _this.handleOnChange,
      );
    };
    // 监听点击清除图标
    _this.handleOnClear = function() {
      _this.setState(
        {
          derivedValue: null,
          pickerValue: parseDateString(),
        },
        _this.handleOnChange,
      );
    };
    // 监听 month 面板点击
    _this.handleClickMonth = function(month) {
      var pickerValue = _this.state.pickerValue;
      _this.setState({
        pickerValue: Object.assign({}, pickerValue, { month: month }),
        mode: 'date',
      });
    };
    // 监听 year 面板点击
    _this.handleClickYear = function(year, type) {
      var pickerValue = _this.state.pickerValue;
      switch (type) {
        case 'first':
          _this.setState({
            pickerValue: Object.assign({}, pickerValue, {
              year: pickerValue.year - 10,
            }),
          });
          break;
        case 'middle':
          _this.setState({
            pickerValue: Object.assign({}, pickerValue, { year: year }),
            mode: 'date',
          });
          break;
        case 'last':
          _this.setState({
            pickerValue: Object.assign({}, pickerValue, {
              year: pickerValue.year + 10,
            }),
          });
          break;
        default:
          break;
      }
    };
    // 监听 decade 面板点击
    _this.handleClickDecade = function(decade, type) {
      var pickerValue = _this.state.pickerValue;
      switch (type) {
        case 'first':
          _this.setState({
            pickerValue: Object.assign({}, pickerValue, {
              year: pickerValue.year - 100,
            }),
          });
          break;
        case 'middle':
          _this.setState({
            pickerValue: Object.assign({}, pickerValue, { year: decade }),
            mode: 'year',
          });
          break;
        case 'last':
          _this.setState({
            pickerValue: Object.assign({}, pickerValue, {
              year: pickerValue.year + 100,
            }),
          });
          break;
        default:
          break;
      }
    };
    // 渲染日历面板
    _this.renderCalendarBody = function() {
      var _a = _this.state,
        mode = _a.mode,
        pickerValue = _a.pickerValue,
        derivedValue = _a.derivedValue;
      switch (mode) {
        case 'date':
          return React.createElement(DatePanel, {
            year: pickerValue.year,
            month: pickerValue.month,
            value: derivedValue,
            onClickDate: _this.handleClickDate,
          });
        case 'month':
          return React.createElement(MonthPanel, {
            month: pickerValue.month,
            onClickMonth: _this.handleClickMonth,
          });
        case 'year':
          return React.createElement(YearPanel, {
            startYear: Math.floor(pickerValue.year / 10) * 10,
            year: pickerValue.year,
            onClickYear: _this.handleClickYear,
          });
        case 'decade':
          return React.createElement(DecadePanel, {
            startDecade: Math.floor(pickerValue.year / 100) * 100,
            decade: Math.floor(pickerValue.year / 10) * 10,
            onClickDecade: _this.handleClickDecade,
          });
        default:
          return null;
      }
    };
    // 监听日期面板点击单箭头更改月份
    _this.handleClickArrow = function(position) {
      var pickerValue = _this.state.pickerValue;
      // month-1
      if (position === 'left') {
        pickerValue.month === 1
          ? _this.setState({
              pickerValue: Object.assign({}, pickerValue, {
                year: pickerValue.year - 1,
                month: 12,
              }),
            })
          : _this.setState({
              pickerValue: Object.assign({}, pickerValue, {
                month: pickerValue.month - 1,
              }),
            });
        // month+1
      } else {
        pickerValue.month === 12
          ? _this.setState({
              pickerValue: Object.assign({}, pickerValue, {
                year: pickerValue.year + 1,
                month: 1,
              }),
            })
          : _this.setState({
              pickerValue: Object.assign({}, pickerValue, {
                month: pickerValue.month + 1,
              }),
            });
      }
    };
    // 监听 month year decade 面板点击双箭头
    _this.handleClickDouble = function(position) {
      var _a = _this.state,
        mode = _a.mode,
        pickerValue = _a.pickerValue;
      // left -
      if (position === 'left') {
        switch (mode) {
          case 'month':
            _this.setState({
              pickerValue: Object.assign({}, pickerValue, {
                year: pickerValue.year - 1,
              }),
            });
            break;
          case 'year':
            _this.setState({
              pickerValue: Object.assign({}, pickerValue, {
                year: pickerValue.year - 10,
              }),
            });
            break;
          case 'decade':
            _this.setState({
              pickerValue: Object.assign({}, pickerValue, {
                year: pickerValue.year - 100,
              }),
            });
            break;
          default:
            break;
        }
        // right +
      } else {
        switch (mode) {
          case 'month':
            _this.setState({
              pickerValue: Object.assign({}, pickerValue, {
                year: pickerValue.year + 1,
              }),
            });
            break;
          case 'year':
            _this.setState({
              pickerValue: Object.assign({}, pickerValue, {
                year: pickerValue.year + 10,
              }),
            });
            break;
          case 'decade':
            _this.setState({
              pickerValue: Object.assign({}, pickerValue, {
                year: pickerValue.year + 100,
              }),
            });
            break;
          default:
            break;
        }
      }
    };
    // 监听点击动作条中间文字
    _this.handleClickValue = function() {
      var mode = _this.state.mode;
      switch (mode) {
        case 'month':
          _this.setState({
            mode: 'year',
          });
          break;
        case 'year':
          _this.setState({
            mode: 'decade',
          });
          break;
        default:
          break;
      }
    };
    // 渲染动作条
    _this.renderCalendarHandler = function() {
      var _a = _this.state,
        mode = _a.mode,
        pickerValue = _a.pickerValue;
      switch (mode) {
        case 'date':
          return React.createElement(
            React.Fragment,
            null,
            React.createElement(
              'li',
              { className: 'left' },
              React.createElement(
                'span',
                {
                  className: 'icon-wrapper',
                  onClick: function() {
                    return _this.setState({
                      pickerValue: Object.assign({}, pickerValue, {
                        year: pickerValue.year - 1,
                      }),
                    });
                  },
                },
                React.createElement(Icon, { name: 'double', size: 10 }),
              ),
              React.createElement(
                'span',
                {
                  className: 'icon-wrapper',
                  onClick: function() {
                    return _this.handleClickArrow('left');
                  },
                },
                React.createElement(Icon, { name: 'right', size: 11 }),
              ),
            ),
            React.createElement(
              'li',
              { className: 'middle' },
              React.createElement(
                'span',
                {
                  className: 'value',
                  onClick: function() {
                    return _this.setState({ mode: 'year' });
                  },
                },
                pickerValue.year,
                '\u5E74\u00A0',
              ),
              React.createElement(
                'span',
                {
                  className: 'value',
                  onClick: function() {
                    return _this.setState({ mode: 'month' });
                  },
                },
                _this.fixNumberToString(pickerValue.month),
                '\u6708',
              ),
            ),
            React.createElement(
              'li',
              { className: 'right' },
              React.createElement(
                'span',
                {
                  className: 'icon-wrapper',
                  onClick: function() {
                    return _this.handleClickArrow('right');
                  },
                },
                React.createElement(Icon, { name: 'right', size: 11 }),
              ),
              React.createElement(
                'span',
                {
                  className: 'icon-wrapper',
                  onClick: function() {
                    return _this.setState({
                      pickerValue: Object.assign({}, pickerValue, {
                        year: pickerValue.year + 1,
                      }),
                    });
                  },
                },
                React.createElement(Icon, { name: 'double', size: 10 }),
              ),
            ),
          );
        default:
          return React.createElement(
            React.Fragment,
            null,
            React.createElement(
              'li',
              { className: 'left' },
              React.createElement(
                'span',
                {
                  className: 'icon-wrapper',
                  onClick: function() {
                    return _this.handleClickDouble('left');
                  },
                },
                React.createElement(Icon, { name: 'double', size: 10 }),
              ),
            ),
            React.createElement(
              'li',
              { className: 'middle' },
              React.createElement(
                'span',
                {
                  className: classes(componentName, ['value'], {
                    decade: mode === 'decade',
                  }),
                  onClick: _this.handleClickValue,
                },
                _this.getHandleBarText(),
              ),
            ),
            React.createElement(
              'li',
              { className: 'right' },
              React.createElement(
                'span',
                {
                  className: 'icon-wrapper',
                  onClick: function() {
                    return _this.handleClickDouble('right');
                  },
                },
                React.createElement(Icon, { name: 'double', size: 10 }),
              ),
            ),
          );
      }
    };
    // 动作条中间文字
    _this.getHandleBarText = function() {
      var _a = _this.state,
        mode = _a.mode,
        pickerValue = _a.pickerValue;
      if (mode === 'year') {
        var year = Math.floor(pickerValue.year / 10) * 10;
        return year + '-' + (year + 9);
      } else if (mode === 'month') {
        return pickerValue.year + '';
      } else if (mode === 'decade') {
        var year = Math.floor(pickerValue.year / 100) * 100;
        return year + '-' + (year + 99);
      }
      return '';
    };
    // 获取 input 渲染文字
    _this.getStringFromDerivedValue = function() {
      var derivedValue = _this.state.derivedValue;
      if (!derivedValue) {
        return '';
      } else {
        var year = derivedValue.year,
          month = derivedValue.month,
          date = derivedValue.date;
        return (
          year +
          '-' +
          _this.fixNumberToString(month) +
          '-' +
          _this.fixNumberToString(date)
        );
      }
    };
    // 1 => '01'
    _this.fixNumberToString = function(n) {
      if (n > 9) {
        return n + '';
      } else {
        return '0' + n;
      }
    };
    var defaultValue = props.defaultValue,
      defaultPickerValue = props.defaultPickerValue;
    // 是否可被解析
    var valueCanBeParsed = defaultValue && !isNaN(Date.parse(defaultValue));
    var pickerValueCanBeParsed =
      defaultPickerValue && !isNaN(Date.parse(defaultPickerValue));
    _this.state = {
      derivedValue: valueCanBeParsed ? parseDateString(defaultValue) : null,
      pickerValue: pickerValueCanBeParsed
        ? parseDateString(defaultPickerValue)
        : parseDateString(),
      calendarVisible: false,
      mode: 'date',
      startYear: 0,
      startDecade: 0,
    };
    return _this;
  }
  DatePicker.getDerivedStateFromProps = function(nextProps, prevState) {
    if (nextProps.value && !isNaN(Date.parse(nextProps.value))) {
      return {
        derivedValue: parseDateString(nextProps.value),
        pickerValue: parseDateString(nextProps.value),
      };
    }
    return null;
  };
  DatePicker.prototype.componentDidMount = function() {
    document.addEventListener('click', this.handleClickDocument, true); // 第三个参数为 true，让事件在捕获阶段触发，重要，否则被点击元素被移除的话会导致判断不准
  };
  DatePicker.prototype.componentDidUpdate = function(prevProps, prevState) {
    var onOpenChange = this.props.onOpenChange;
    var calendarVisible = this.state.calendarVisible;
    if (onOpenChange && prevState.calendarVisible !== calendarVisible) {
      onOpenChange(calendarVisible);
    }
  };
  DatePicker.prototype.componentWillUnmount = function() {
    document.removeEventListener('click', this.handleClickDocument, true);
  };
  DatePicker.prototype.render = function() {
    var cn = componentName;
    var _a = this.props,
      placeholder = _a.placeholder,
      footer = _a.footer,
      className = _a.className,
      style = _a.style,
      zIndex = _a.zIndex;
    var _b = this.state,
      calendarVisible = _b.calendarVisible,
      mode = _b.mode;
    return React.createElement(
      'div',
      { className: classes(cn, ''), ref: this.saveDatePickerRef },
      React.createElement(
        'span',
        { className: classes(cn, 'input-wrapper') },
        placeholder &&
          !this.getStringFromDerivedValue() &&
          React.createElement(
            'span',
            { className: classes(cn, 'placeholder') },
            placeholder,
          ),
        React.createElement('input', {
          type: 'text',
          value: this.getStringFromDerivedValue(),
          className: classes(cn, 'input', [className]),
          style: style,
          readOnly: true,
          onClick: this.handleClickInput,
        }),
        React.createElement(
          'span',
          { className: classes(cn, 'icon-wrapper') },
          React.createElement(Icon, { name: 'calendar', size: 16 }),
        ),
        this.getStringFromDerivedValue() &&
          React.createElement(
            'span',
            {
              className: classes(cn, 'icon-wrapper', ['close']),
              onClick: this.handleOnClear,
            },
            React.createElement(Icon, { name: 'close', size: 12 }),
          ),
      ),
      React.createElement(
        Transition,
        {
          visible: calendarVisible,
          beforeEnter: { height: '260px', opacity: 0 },
          afterEnter: { height: '330px', opacity: 1 },
        },
        React.createElement(
          'div',
          { className: classes(cn, 'calendar'), style: { zIndex: zIndex } },
          placeholder &&
            !this.getStringFromDerivedValue() &&
            React.createElement(
              'span',
              { className: 'calendar-placeholder' },
              placeholder,
            ),
          React.createElement('input', {
            type: 'text',
            value: this.getStringFromDerivedValue(),
            className: 'calendar-input',
            readOnly: true,
          }),
          React.createElement(
            'ul',
            { className: 'calendar-handlebar' },
            this.renderCalendarHandler(),
          ),
          React.createElement(
            'div',
            { className: 'calendar-body' },
            this.renderCalendarBody(),
          ),
          mode === 'date' &&
            React.createElement(
              'div',
              { className: 'calendar-footer' },
              footer
                ? footer
                : React.createElement(
                    'span',
                    {
                      className: 'footer-text',
                      onClick: this.handleClickToday,
                    },
                    '\u4ECA\u00A0\u5929',
                  ),
            ),
        ),
      ),
    );
  };
  DatePicker.displayName = componentName;
  DatePicker.defaultProps = {
    zIndex: 80,
  };
  DatePicker.propTypes = {
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    defaultPickerValue: PropTypes.string,
    placeholder: PropTypes.string,
    footer: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    onChange: PropTypes.func,
    onOpenChange: PropTypes.func,
    zIndex: PropTypes.number,
    className: PropTypes.string,
    style: PropTypes.object,
  };
  return DatePicker;
})(React.Component);
export default DatePicker;
