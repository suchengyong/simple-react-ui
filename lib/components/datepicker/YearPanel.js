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
var componentName = 'YearPanel';
var YearPanel = /** @class */ (function(_super) {
  __extends(YearPanel, _super);
  function YearPanel() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.handleClickYear = function(year, index) {
      var onClickYear = _this.props.onClickYear;
      if (onClickYear) {
        if (index === 0) {
          onClickYear(year, 'first');
        } else if (index === 11) {
          onClickYear(year, 'last');
        } else {
          onClickYear(year, 'middle');
        }
      }
    };
    _this.renderYear = function() {
      var cn = componentName;
      var _a = _this.props,
        startYear = _a.startYear,
        year = _a.year;
      return Array.from({ length: 12 }, function(item, n) {
        return startYear + n - 1;
      }).map(function(val, index) {
        return React.createElement(
          'li',
          {
            className: classes(cn, 'year'),
            key: index,
            onClick: function() {
              return _this.handleClickYear(val, index);
            },
          },
          React.createElement(
            'span',
            { className: classes(cn, 'year-item', { selected: val === year }) },
            val,
          ),
        );
      });
    };
    return _this;
  }
  YearPanel.prototype.render = function() {
    return React.createElement(
      'ul',
      { className: classes(componentName, '') },
      this.renderYear(),
    );
  };
  YearPanel.displayName = componentName;
  YearPanel.propTypes = {
    startYear: PropTypes.number,
    year: PropTypes.number,
    onClickYear: PropTypes.func,
  };
  return YearPanel;
})(React.Component);
export default YearPanel;
