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
var componentName = 'TabPane';
var TabPane = /** @class */ (function(_super) {
  __extends(TabPane, _super);
  function TabPane() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  TabPane.prototype.render = function() {
    var _a = this.props,
      active = _a.active,
      className = _a.className,
      style = _a.style,
      children = _a.children;
    return React.createElement(
      'li',
      {
        className: classes(componentName, '', [className], { active: active }),
        style: style,
      },
      children,
    );
  };
  TabPane.displayName = componentName;
  TabPane.defaultProps = {
    disabled: false,
  };
  TabPane.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
      .isRequired,
    active: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
    disabled: PropTypes.bool,
  };
  return TabPane;
})(React.Component);
export default TabPane;
