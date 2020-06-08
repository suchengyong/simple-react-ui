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
var componentName = 'Row';
var Row = /** @class */ (function(_super) {
  __extends(Row, _super);
  function Row() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Row.prototype.render = function() {
    var cn = componentName;
    var _a = this.props,
      gutter = _a.gutter,
      className = _a.className,
      style = _a.style,
      children = _a.children,
      rest = __rest(_a, ['gutter', 'className', 'style', 'children']);
    return React.createElement(
      'div',
      __assign({ className: classes(cn, '', [className]) }, rest, {
        style: __assign(
          { marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px' },
          style,
        ),
      }),
      React.Children.map(children, function(child) {
        return React.cloneElement(child, {
          gutter: gutter,
        });
      }),
    );
  };
  Row.displayName = componentName;
  Row.defaultProps = {
    gutter: 0,
  };
  Row.propTypes = {
    gutter: PropTypes.number,
    className: PropTypes.string,
    style: PropTypes.object,
  };
  return Row;
})(React.Component);
export default Row;
