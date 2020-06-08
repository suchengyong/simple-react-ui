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
import { classes } from '../utils';
var componentName = 'MonthPanel';
var MonthPanel = /** @class */ (function(_super) {
  __extends(MonthPanel, _super);
  function MonthPanel() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.monthArray = [
      '一月',
      '二月',
      '三月',
      '四月',
      '五月',
      '六月',
      '七月',
      '八月',
      '九月',
      '十月',
      '十一月',
      '十二月',
    ];
    _this.handleClickMonth = function(month) {
      var onClickMonth = _this.props.onClickMonth;
      if (onClickMonth) {
        onClickMonth(month);
      }
    };
    return _this;
  }
  MonthPanel.prototype.render = function() {
    var _this = this;
    var cn = componentName;
    var month = this.props.month;
    return React.createElement(
      'ul',
      { className: classes(cn, '') },
      this.monthArray.map(function(str, index) {
        return React.createElement(
          'li',
          {
            key: str,
            onClick: function() {
              return _this.handleClickMonth(index + 1);
            },
            className: classes(cn, 'month'),
          },
          React.createElement(
            'span',
            {
              className: classes(cn, 'month-item', {
                selected: month === index + 1,
              }),
            },
            str,
          ),
        );
      }),
    );
  };
  MonthPanel.displayName = componentName;
  MonthPanel.propTypes = {
    month: PropTypes.number,
    onClickMonth: PropTypes.func,
  };
  return MonthPanel;
})(React.Component);
export default MonthPanel;
