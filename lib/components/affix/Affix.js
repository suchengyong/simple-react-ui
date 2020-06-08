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
var componentName = 'Affix';
var Affix = /** @class */ (function(_super) {
  __extends(Affix, _super);
  function Affix() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.top = 0;
    _this.setTop = function() {
      if (window.scrollY === 0) {
        _this.top = _this.affixRef.getBoundingClientRect().top;
        // 挂载时若窗口滚动不为 0，先滚动至 0
      } else {
        var scrollX_1 = window.scrollX,
          scrollY_1 = window.scrollY;
        window.scrollTo(scrollX_1, 0);
        _this.top = _this.affixRef.getBoundingClientRect().top;
        window.scrollTo(scrollX_1, scrollY_1);
      }
    };
    _this.handleScroll = function() {
      var distance = _this.props.distance;
      if (window.scrollY > _this.top - distance) {
        var _a = _this.wrapperRef.getBoundingClientRect(),
          top_1 = _a.top,
          bottom = _a.bottom,
          left = _a.left,
          right = _a.right;
        _this.wrapperRef.style.width = right - left + 'px';
        _this.wrapperRef.style.height = bottom - top_1 + 'px';
        _this.wrapperRef.style.left = left + 'px';
        _this.wrapperRef.style.top = distance + 'px';
        _this.wrapperRef.style.position = 'fixed';
      } else {
        _this.wrapperRef.style.position = 'static';
      }
    };
    _this.saveAffixRef = function(node) {
      _this.affixRef = node;
    };
    _this.saveWrapperRef = function(node) {
      _this.wrapperRef = node;
    };
    return _this;
  }
  Affix.prototype.componentDidMount = function() {
    window.addEventListener('scroll', this.handleScroll);
    this.setTop();
  };
  Affix.prototype.componentWillUnmount = function() {
    window.removeEventListener('scroll', this.handleScroll);
  };
  Affix.prototype.render = function() {
    var cn = componentName;
    var _a = this.props,
      distance = _a.distance,
      className = _a.className,
      style = _a.style,
      children = _a.children,
      rest = __rest(_a, ['distance', 'className', 'style', 'children']);
    return React.createElement(
      'div',
      { className: classes(cn, ''), ref: this.saveAffixRef },
      React.createElement(
        'div',
        __assign(
          {
            className: classes(cn, 'wrapper', [className]),
            ref: this.saveWrapperRef,
            style: style,
          },
          rest,
        ),
        children,
      ),
    );
  };
  Affix.displayName = componentName;
  Affix.defaultProps = {
    distance: 0,
  };
  Affix.propTypes = {
    distance: PropTypes.number,
    className: PropTypes.string,
    style: PropTypes.object,
  };
  return Affix;
})(React.Component);
export default Affix;
