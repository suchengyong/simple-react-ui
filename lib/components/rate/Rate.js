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
import Star from './Star';
var componentName = 'Rate';
var Rate = /** @class */ (function(_super) {
  __extends(Rate, _super);
  function Rate(props) {
    var _this = _super.call(this, props) || this;
    // 调用回调
    _this.handleOnChange = function(value) {
      var onChange = _this.props.onChange;
      if (onChange) {
        onChange(value);
      }
    };
    // 监听点击星星
    _this.handleClickStar = function(index, position) {
      var _a = _this.props,
        allowClear = _a.allowClear,
        allowHalf = _a.allowHalf,
        disabled = _a.disabled;
      var derivedValue = _this.state.derivedValue;
      if (disabled) {
        return;
      }
      var newValue = index + (allowHalf && position === 'left' ? 0.5 : 1);
      // 允许清除
      if (allowClear) {
        if (derivedValue !== newValue) {
          _this.setState({ derivedValue: newValue });
          _this.handleOnChange(newValue);
        } else {
          _this.setState({ derivedValue: 0, hoverValue: 0 });
          _this.handleOnChange(0);
        }
        // 不允许清除
      } else {
        if (derivedValue !== newValue) {
          _this.setState({
            derivedValue: newValue,
          });
          _this.handleOnChange(newValue);
        }
      }
    };
    // 调用回调
    _this.handleOnHoverChange = function(value) {
      var onHoverChange = _this.props.onHoverChange;
      if (onHoverChange) {
        onHoverChange(value);
      }
    };
    // 监听鼠标移动
    _this.handleHover = function(index, position) {
      var _a = _this.props,
        allowHalf = _a.allowHalf,
        disabled = _a.disabled;
      var hoverValue = _this.state.hoverValue;
      if (disabled) {
        return;
      }
      // 半星
      if (allowHalf) {
        var newValue = index + (position === 'left' ? 0.5 : 1);
        if (hoverValue !== newValue) {
          _this.setState({
            hoverValue: newValue,
          });
          _this.handleOnHoverChange(newValue);
        }
        // 非半星
      } else {
        if (hoverValue !== index + 1) {
          _this.setState({
            hoverValue: index + 1,
          });
          _this.handleOnHoverChange(index + 1);
        }
      }
    };
    // 监听鼠标移出 star 容器
    _this.handleMouseLeave = function() {
      _this.setState({ hoverValue: 0 });
      _this.handleOnHoverChange(0);
    };
    _this.state = {
      derivedValue: props.defaultValue || 0,
      hoverValue: 0,
    };
    return _this;
  }
  Rate.getDerivedStateFromProps = function(nextProps, prevState) {
    var value = nextProps.value;
    var derivedValue = prevState.derivedValue;
    if ('value' in nextProps && value !== derivedValue) {
      return { derivedValue: value };
    }
    return null;
  };
  Rate.prototype.render = function() {
    var _this = this;
    var cn = componentName;
    var _a = this.props,
      tips = _a.tips,
      className = _a.className,
      style = _a.style;
    var _b = this.state,
      hoverValue = _b.hoverValue,
      derivedValue = _b.derivedValue;
    return React.createElement(
      'div',
      { className: classes(cn, '', [className]), style: style },
      React.createElement(
        'ul',
        {
          className: classes(cn, 'star-container'),
          onMouseLeave: this.handleMouseLeave,
        },
        Array.from({ length: 5 }, function(val, n) {
          return 'item-' + n;
        }).map(function(item, index) {
          return React.createElement(Star, {
            count: hoverValue || derivedValue,
            index: index,
            handleHover: _this.handleHover,
            handleClick: _this.handleClickStar,
            key: item,
          });
        }),
      ),
      tips &&
        React.createElement('div', { className: classes(cn, 'tips') }, tips),
    );
  };
  Rate.displayName = componentName;
  Rate.defaultProps = {
    allowClear: false,
    allowHalf: false,
    disabled: false,
  };
  Rate.propTypes = {
    value: PropTypes.number,
    defaultValue: PropTypes.number,
    onChange: PropTypes.func,
    onHoverChange: PropTypes.func,
    allowClear: PropTypes.bool,
    allowHalf: PropTypes.bool,
    disabled: PropTypes.bool,
    tips: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    className: PropTypes.string,
    style: PropTypes.object,
  };
  return Rate;
})(React.Component);
export default Rate;
