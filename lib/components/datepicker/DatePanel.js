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
import { getDateLists, classes } from '../utils';
var componentName = 'DatePanel';
var DatePanel = /** @class */ (function(_super) {
  __extends(DatePanel, _super);
  function DatePanel() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.isSelected = function(year, month, date) {
      var value = _this.props.value;
      if (!value) {
        return false;
      }
      var selectedYear = value.year,
        selectedMonth = value.month,
        selectedDate = value.date;
      return (
        selectedYear === year &&
        selectedMonth === month &&
        selectedDate === date
      );
    };
    _this.isToday = function(year, month, date) {
      var dateObject = new Date();
      return (
        year === dateObject.getFullYear() &&
        month === dateObject.getMonth() + 1 &&
        date === dateObject.getDate()
      );
    };
    _this.renderPrefix = function(prefix) {
      var _a = _this.props,
        year = _a.year,
        month = _a.month;
      var cn = componentName;
      return prefix.map(function(n) {
        return React.createElement(
          'li',
          {
            key: 'prefix' + n,
            className: classes(cn, 'date', ['prefix'], {
              selected:
                month === 1
                  ? _this.isSelected(year - 1, 12, n)
                  : _this.isSelected(year, month - 1, n),
              today:
                month === 1
                  ? _this.isToday(year - 1, 12, n)
                  : _this.isToday(year, month - 1, n),
            }),
            onClick: function() {
              return _this.handleClickDate(year, month - 1, n);
            },
          },
          n,
        );
      });
    };
    _this.renderDateList = function(dateList) {
      var _a = _this.props,
        year = _a.year,
        month = _a.month;
      var cn = componentName;
      return dateList.map(function(n) {
        return React.createElement(
          'li',
          {
            key: 'date-list' + n,
            className: classes(cn, 'date', ['date-list'], {
              selected: _this.isSelected(year, month, n),
              today: _this.isToday(year, month, n),
            }),
            onClick: function() {
              return _this.handleClickDate(year, month, n);
            },
          },
          n,
        );
      });
    };
    _this.renderSuffix = function(suffix) {
      var _a = _this.props,
        year = _a.year,
        month = _a.month;
      var cn = componentName;
      return suffix.map(function(n) {
        return React.createElement(
          'li',
          {
            key: 'suffix' + n,
            className: classes(cn, 'date', ['suffix'], {
              selected:
                month === 12
                  ? _this.isSelected(year + 1, 1, n)
                  : _this.isSelected(year, month + 1, n),
              today:
                month === 12
                  ? _this.isSelected(year + 1, 1, n)
                  : _this.isSelected(year, month + 1, n),
            }),
            onClick: function() {
              return _this.handleClickDate(year, month + 1, n);
            },
          },
          n,
        );
      });
    };
    _this.renderDateLists = function() {
      var _a = _this.props,
        year = _a.year,
        month = _a.month;
      var _b = getDateLists(year, month),
        prefix = _b.prefix,
        dateList = _b.dateList,
        suffix = _b.suffix;
      return _this
        .renderPrefix(prefix)
        .concat(_this.renderDateList(dateList))
        .concat(_this.renderSuffix(suffix));
    };
    _this.handleClickDate = function(year, month, date) {
      var onClickDate = _this.props.onClickDate;
      if (onClickDate) {
        if (month === 0) {
          onClickDate({ year: year - 1, month: 12, date: date });
        } else if (month === 13) {
          onClickDate({ year: year + 1, month: 1, date: date });
        } else {
          onClickDate({ year: year, month: month, date: date });
        }
      }
    };
    return _this;
  }
  DatePanel.prototype.render = function() {
    var cn = componentName;
    return React.createElement(
      'ul',
      { className: 'xue-datepanel' },
      React.createElement('li', { className: classes(cn, 'day') }, '\u4E00'),
      React.createElement('li', { className: classes(cn, 'day') }, '\u4E8C'),
      React.createElement('li', { className: classes(cn, 'day') }, '\u4E09'),
      React.createElement('li', { className: classes(cn, 'day') }, '\u56DB'),
      React.createElement('li', { className: classes(cn, 'day') }, '\u4E94'),
      React.createElement('li', { className: classes(cn, 'day') }, '\u516D'),
      React.createElement('li', { className: classes(cn, 'day') }, '\u65E5'),
      this.renderDateLists(),
    );
  };
  DatePanel.displayName = componentName;
  DatePanel.propTypes = {
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    value: PropTypes.object,
    onClickDate: PropTypes.func,
  };
  return DatePanel;
})(React.Component);
export default DatePanel;
