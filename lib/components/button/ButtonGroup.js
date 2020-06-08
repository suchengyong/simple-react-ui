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
import classes from '../utils/classes';
var componentName = 'ButtonGroup';
var ButtonGroup = /** @class */ (function(_super) {
  __extends(ButtonGroup, _super);
  function ButtonGroup() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  ButtonGroup.prototype.render = function() {
    var _a = this.props,
      className = _a.className,
      style = _a.style,
      children = _a.children;
    return React.createElement(
      'div',
      { className: classes(componentName, '', [className]), style: style },
      children,
    );
  };
  ButtonGroup.displayName = componentName;
  ButtonGroup.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
  };
  return ButtonGroup;
})(React.Component);
export default ButtonGroup;
