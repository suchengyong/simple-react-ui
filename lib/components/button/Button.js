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
var __assign =
  (this && this.__assign) ||
  function() {
    __assign =
      Object.assign ||
      function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __rest =
  (this && this.__rest) ||
  function(s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  };
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { classes } from '../utils';
import Wave from '../wave/Wave';
import Icon from '../icon/Icon';
var componentName = 'Button';
var Button = /** @class */ (function(_super) {
  __extends(Button, _super);
  function Button() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.renderIcon = function() {
      var _a = _this.props,
        icon = _a.icon,
        size = _a.size,
        loading = _a.loading;
      var className = classes(componentName, 'icon', [size], {
        loading: loading,
      });
      return loading
        ? React.createElement(Icon, { name: 'loading', className: className })
        : icon &&
            React.createElement(Icon, { name: icon, className: className });
    };
    return _this;
  }
  Button.prototype.render = function() {
    var cn = componentName;
    var _a = this.props,
      position = _a.position,
      icon = _a.icon,
      loading = _a.loading,
      size = _a.size,
      type = _a.type,
      htmlType = _a.htmlType,
      ghost = _a.ghost,
      style = _a.style,
      className = _a.className,
      disabled = _a.disabled,
      children = _a.children,
      rest = __rest(_a, [
        'position',
        'icon',
        'loading',
        'size',
        'type',
        'htmlType',
        'ghost',
        'style',
        'className',
        'disabled',
        'children',
      ]);
    var buttonClassName = classes(cn, '', [position, size, type, className], {
      ghost: ghost,
      disabled: disabled,
    });
    return React.createElement(
      Wave,
      null,
      React.createElement(
        'button',
        __assign(
          {
            className: buttonClassName,
            style: style,
            type: htmlType,
            disabled: disabled,
          },
          rest,
        ),
        this.renderIcon(),
        React.createElement(
          'span',
          { className: classes(cn, 'inner') },
          children,
        ),
      ),
    );
  };
  Button.displayName = componentName;
  Button.defaultProps = {
    position: 'left',
    size: 'medium',
    type: 'default',
    ghost: false,
    htmlType: 'button',
    loading: false,
    disabled: false,
  };
  Button.propTypes = {
    icon: PropTypes.string,
    position: PropTypes.oneOf(['left', 'right']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    type: PropTypes.oneOf(['default', 'dashed', 'primary', 'danger']),
    ghost: PropTypes.bool,
    htmlType: PropTypes.oneOf(['button', 'submit', 'reset']),
    loading: PropTypes.bool,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
  };
  return Button;
})(React.Component);
export default Button;
