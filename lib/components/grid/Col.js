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
var componentName = 'Col';
var Col = /** @class */ (function(_super) {
  __extends(Col, _super);
  function Col() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.getColClassName = function() {
      var _a = _this.props,
        gutter = _a.gutter,
        span = _a.span,
        _b = _a.offset,
        offset = _b === void 0 ? 0 : _b,
        children = _a.children,
        className = _a.className,
        style = _a.style,
        options = __rest(_a, [
          'gutter',
          'span',
          'offset',
          'children',
          'className',
          'style',
        ]);
      var classNameArr = ['col-span-' + span, 'col-offset-' + offset];
      Object.keys(options).forEach(function(key) {
        if (options[key]) {
          var _a = options[key],
            optionSpan = _a.span,
            _b = _a.offset,
            optionOffset = _b === void 0 ? 0 : _b;
          classNameArr.push(key + '-col-span-' + optionSpan);
          classNameArr.push(key + '-col-offset-' + optionOffset);
        }
      });
      if (className) {
        classNameArr.push(className);
      }
      return classNameArr;
    };
    return _this;
  }
  Col.prototype.render = function() {
    var cn = componentName;
    var _a = this.props,
      gutter = _a.gutter,
      span = _a.span,
      offset = _a.offset,
      sm = _a.sm,
      md = _a.md,
      lg = _a.lg,
      xl = _a.xl,
      className = _a.className,
      style = _a.style,
      children = _a.children,
      rest = __rest(_a, [
        'gutter',
        'span',
        'offset',
        'sm',
        'md',
        'lg',
        'xl',
        'className',
        'style',
        'children',
      ]);
    return React.createElement(
      'div',
      __assign({ className: classes(cn, '', this.getColClassName()) }, rest, {
        style: __assign(
          { paddingLeft: gutter / 2 + 'px', paddingRight: gutter / 2 + 'px' },
          style,
        ),
      }),
      children,
    );
  };
  Col.displayName = componentName;
  Col.defaultProps = {
    gutter: 0,
  };
  Col.propTypes = {
    gutter: PropTypes.number,
    span: PropTypes.number,
    offset: PropTypes.number,
    className: PropTypes.string,
    style: PropTypes.object,
  };
  return Col;
})(React.Component);
export default Col;
