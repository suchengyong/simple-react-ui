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
import { calculatePagerPages, classes } from '../utils';
import Icon from '../icon/Icon';
var componentName = 'Pager';
var Pager = /** @class */ (function(_super) {
  __extends(Pager, _super);
  function Pager(props) {
    var _this = _super.call(this, props) || this;
    // 监听点击省略号
    _this.handleClickDot = function(index) {
      var derivedCurrent = _this.state.derivedCurrent;
      var total = _this.props.total;
      // prev
      if (index === 1) {
        var n = derivedCurrent - 5 < 1 ? 1 : derivedCurrent - 5;
        _this.setState({
          derivedCurrent: n,
        });
        _this.handleOnChange(n);
      } else {
        var n = derivedCurrent + 5 > total ? total : derivedCurrent + 5;
        _this.setState({
          derivedCurrent: n,
        });
        _this.handleOnChange(n);
      }
    };
    _this.handleOnChange = function(n) {
      var onChange = _this.props.onChange;
      if (onChange) {
        onChange(n);
      }
    };
    _this.state = {
      derivedCurrent: props.defaultCurrent || 1,
      derivedTotal: props.total,
    };
    return _this;
  }
  Pager.getDerivedStateFromProps = function(nextProps, prevState) {
    var current = nextProps.current,
      total = nextProps.total;
    var derivedCurrent = prevState.derivedCurrent,
      derivedTotal = prevState.derivedTotal;
    var shouldChangeCurrent =
      'current' in nextProps && current !== derivedCurrent;
    var shouldChangeTotal = 'total' in nextProps && total !== derivedTotal;
    if (shouldChangeCurrent && shouldChangeTotal) {
      return { derivedCurrent: current, derivedTotal: total };
    } else if (shouldChangeCurrent && !shouldChangeTotal) {
      return { derivedCurrent: current };
    } else if (!shouldChangeCurrent && shouldChangeTotal) {
      return { derivedTotal: total };
    }
    return null;
  };
  Pager.prototype.handleClickNum = function(n) {
    if (n !== this.state.derivedCurrent) {
      this.setState({
        derivedCurrent: n,
      });
      this.handleOnChange(n);
    }
  };
  Pager.prototype.handleSkip = function(payload) {
    var derivedCurrent = this.state.derivedCurrent;
    var total = this.props.total;
    if (derivedCurrent + payload > total || derivedCurrent + payload < 1) {
      return;
    } else {
      this.setState({
        derivedCurrent: derivedCurrent + payload,
      });
      this.handleOnChange(derivedCurrent + payload);
    }
  };
  Pager.prototype.render = function() {
    var _this = this;
    var cn = componentName;
    var _a = this.props,
      simple = _a.simple,
      size = _a.size,
      className = _a.className,
      style = _a.style,
      hideOnSinglePage = _a.hideOnSinglePage;
    var _b = this.state,
      derivedCurrent = _b.derivedCurrent,
      derivedTotal = _b.derivedTotal;
    var pages = calculatePagerPages(derivedCurrent, derivedTotal);
    return derivedTotal === 1 && hideOnSinglePage
      ? null
      : React.createElement(
          'ul',
          {
            className: classes(cn, '', [size, className], { simple: simple }),
            style: style,
          },
          React.createElement(
            'li',
            {
              className: classes(cn, 'num', { disabled: derivedCurrent < 2 }),
              onClick: function() {
                return _this.handleSkip(-1);
              },
            },
            React.createElement(Icon, {
              name: 'arrow',
              className: classes(cn, 'icon', ['prev']),
              size: 10,
            }),
          ),
          pages.map(function(item, index) {
            return item === '...'
              ? React.createElement(
                  'li',
                  {
                    className: classes(cn, 'num', ['seprator']),
                    key: item + '-' + index,
                  },
                  React.createElement(Icon, {
                    name: 'dot',
                    onClick: function() {
                      return _this.handleClickDot(index);
                    },
                  }),
                )
              : React.createElement(
                  'li',
                  {
                    className: classes(cn, 'num', {
                      active: derivedCurrent === item,
                    }),
                    key: item + '-' + index,
                    onClick: function() {
                      return _this.handleClickNum(item);
                    },
                  },
                  item,
                );
          }),
          React.createElement(
            'li',
            {
              className: classes(cn, 'num', {
                disabled: derivedCurrent >= derivedTotal,
              }),
              onClick: function() {
                return _this.handleSkip(1);
              },
            },
            React.createElement(Icon, {
              name: 'arrow',
              className: classes(cn, 'icon'),
              size: 10,
            }),
          ),
        );
  };
  Pager.displayName = componentName;
  Pager.defaultProps = {
    simple: false,
    size: 'default',
    defaultCurrent: 1,
    hideOnSinglePage: false,
  };
  Pager.propTypes = {
    current: PropTypes.number,
    total: PropTypes.number.isRequired,
    onChange: PropTypes.func,
    simple: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'default']),
    defaultCurrent: PropTypes.number,
    className: PropTypes.string,
    style: PropTypes.object,
    hideOnSinglePage: PropTypes.bool,
  };
  return Pager;
})(React.Component);
export default Pager;
