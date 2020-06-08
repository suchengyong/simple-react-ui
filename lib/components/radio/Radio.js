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
var componentName = 'Radio';
var Radio = /** @class */ (function(_super) {
  __extends(Radio, _super);
  function Radio(props) {
    var _this = _super.call(this, props) || this;
    _this.renderChildren = function() {
      var _a = _this.props,
        radioStyle = _a.radioStyle,
        vertical = _a.vertical,
        children = _a.children;
      var checkedValue = _this.state.checkedValue;
      return React.Children.map(children, function(child) {
        return React.cloneElement(child, {
          onClick: _this.handleClick,
          checkedValue: checkedValue,
          radioStyle: radioStyle,
          vertical: vertical,
        });
      });
    };
    _this.handleClick = function(checkedValue, e) {
      if (checkedValue !== _this.state.checkedValue) {
        _this.setState({ checkedValue: checkedValue });
        if (_this.props.onChange) {
          _this.props.onChange(checkedValue, e);
        }
      }
    };
    _this.state = {
      checkedValue: props.defaultValue,
    };
    return _this;
  }
  Radio.getDerivedStateFromProps = function(nextProps, prevState) {
    var value = nextProps.value;
    var checkedValue = prevState.checkedValue;
    if ('value' in nextProps && value !== checkedValue) {
      return { checkedValue: value };
    }
    return null;
  };
  Radio.prototype.componentDidMount = function() {
    var defaultValue = this.props.defaultValue;
    if (!('value' in this.props) && 'defaultValue' in this.props) {
      this.setState({ checkedValue: defaultValue });
    }
  };
  Radio.prototype.render = function() {
    var cn = componentName;
    var _a = this.props,
      vertical = _a.vertical,
      className = _a.className,
      style = _a.style;
    return React.createElement(
      'div',
      {
        className: classes(cn, '', [className], { vertical: vertical }),
        style: style,
      },
      this.renderChildren(),
    );
  };
  Radio.displayName = componentName;
  Radio.defaultProps = {
    vertical: false,
    radioStyle: 'radio',
  };
  Radio.propTypes = {
    defaultValue: PropTypes.any,
    onChange: PropTypes.func,
    vertical: PropTypes.bool,
    radioStyle: PropTypes.oneOf(['radio', 'button']),
    className: PropTypes.string,
    style: PropTypes.object,
  };
  return Radio;
})(React.Component);
export default Radio;
