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
var componentName = 'Switch';
var Switch = /** @class */ (function(_super) {
  __extends(Switch, _super);
  function Switch(props) {
    var _this = _super.call(this, props) || this;
    _this.handleClick = function(e) {
      var _a = _this.props,
        disabled = _a.disabled,
        onChange = _a.onChange;
      if (disabled) {
        return;
      }
      var derivedChecked = _this.state.derivedChecked;
      _this.setState({
        derivedChecked: !derivedChecked,
      });
      if (onChange) {
        onChange(!derivedChecked, e);
      }
    };
    _this.state = {
      derivedChecked: props.defaultChecked || false,
    };
    return _this;
  }
  Switch.getDerivedStateFromProps = function(nextProps, prevState) {
    var checked = nextProps.checked;
    var derivedChecked = prevState.derivedChecked;
    if ('checked' in nextProps && checked !== derivedChecked) {
      return { derivedChecked: checked };
    }
    return null;
  };
  Switch.prototype.render = function() {
    var cn = componentName;
    var _a = this.props,
      size = _a.size,
      disabled = _a.disabled,
      style = _a.style,
      className = _a.className;
    var derivedChecked = this.state.derivedChecked;
    var switchClassName = classes(cn, '', [className, size], {
      checked: derivedChecked,
      disabled: disabled,
    });
    return React.createElement(
      'span',
      { className: switchClassName, onClick: this.handleClick, style: style },
      React.createElement('span', { className: classes(cn, 'core') }),
    );
  };
  Switch.displayName = componentName;
  Switch.defaultProps = {
    size: 'default',
    defaultChecked: false,
    disabled: false,
  };
  Switch.propTypes = {
    defaultChecked: PropTypes.bool,
    onChange: PropTypes.func,
    size: PropTypes.oneOf(['small', 'default']),
    disabled: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
  };
  return Switch;
})(React.Component);
export default Switch;
