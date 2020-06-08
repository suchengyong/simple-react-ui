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
import Icon from '../icon/Icon';
import Unfold from '../transition/Unfold';
var componentName = 'Panel';
var Panel = /** @class */ (function(_super) {
  __extends(Panel, _super);
  function Panel() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.handleClickHeader = function(e) {
      var _a = _this.props,
        uniqueKey = _a.uniqueKey,
        onClick = _a.onClick,
        disabled = _a.disabled;
      if (disabled) {
        return;
      }
      onClick(uniqueKey, e);
    };
    return _this;
  }
  Panel.prototype.render = function() {
    var cn = componentName;
    var _a = this.props,
      header = _a.header,
      disabled = _a.disabled,
      derivedActiveKey = _a.derivedActiveKey,
      uniqueKey = _a.uniqueKey,
      showArrow = _a.showArrow,
      className = _a.className,
      style = _a.style,
      children = _a.children;
    var active = derivedActiveKey.indexOf(uniqueKey) > -1;
    return React.createElement(
      React.Fragment,
      null,
      React.createElement(
        'div',
        {
          className: classes(cn, 'header', {
            disabled: disabled,
            active: active,
            'with-arrow': showArrow,
          }),
          onClick: this.handleClickHeader,
        },
        showArrow &&
          React.createElement(
            'span',
            { className: 'arrow-wrapper' },
            React.createElement(Icon, { name: 'arrow', size: 10 }),
          ),
        header,
      ),
      React.createElement(
        Unfold,
        { visible: active, vertical: true },
        React.createElement(
          'div',
          { className: classes(cn, 'body', [className]), style: style },
          children,
        ),
      ),
    );
  };
  Panel.displayName = componentName;
  Panel.propTypes = {
    header: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
      .isRequired,
    uniqueKey: PropTypes.string,
    derivedActiveKey: PropTypes.arrayOf(PropTypes.string),
    disabled: PropTypes.bool,
    showArrow: PropTypes.bool,
    onClick: PropTypes.func,
    style: PropTypes.object,
    className: PropTypes.string,
  };
  return Panel;
})(React.Component);
export default Panel;
