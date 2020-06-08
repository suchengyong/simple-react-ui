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
import * as ReactDOM from 'react-dom';
import * as PropTypes from 'prop-types';
var componentName = 'Unfold';
var Unfold = /** @class */ (function(_super) {
  __extends(Unfold, _super);
  function Unfold() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.monitored = false;
    _this.transitionEffect = {
      vertical: '',
      horizontal: '',
    };
    _this.leaveTo = {
      vertical: {
        paddingTop: '0',
        paddingBottom: '0',
        borderTopWidth: '0',
        borderBottomWidth: '0',
        height: '0',
      },
      horizontal: {
        paddingLeft: '0',
        paddingRight: '0',
        borderLeftWidth: '0',
        borderRightWidth: '0',
        width: '0',
      },
    };
    _this.prevCssProp = {
      paddingLeft: '',
      paddingRight: '',
      paddingTop: '',
      paddingBottom: '',
      borderTopWidth: '',
      borderBottomWidth: '',
      borderLeftWidth: '',
      borderRightWidth: '',
      width: '',
      height: '',
      overflowX: '',
      overflowY: '',
      overflow: '',
    };
    _this.prevSize = {
      width: null,
      height: null,
    };
    _this.setNodeStyle = function(node, cssProp) {
      Object.keys(cssProp).forEach(function(key) {
        node.style[key] = cssProp[key];
      });
    };
    _this.handleTransitionEnd = function(e) {
      var visible = _this.props.visible;
      var _a = _this.prevCssProp,
        overflowX = _a.overflowX,
        overflowY = _a.overflowY,
        overflow = _a.overflow;
      var _b = _this.prevSize,
        width = _b.width,
        height = _b.height;
      _this.setNodeStyle(_this.node, {
        overflowX: overflowX,
        overflowY: overflowY,
        overflow: overflow,
        width: width,
        height: height,
      });
      if (!visible && _this.node) {
        _this.node.style.display = 'none';
      }
    };
    return _this;
  }
  Unfold.prototype.componentDidMount = function() {
    var _a = this.props,
      visible = _a.visible,
      transitionTime = _a.transitionTime;
    if (visible) {
      this.rendered = true;
    }
    this.transitionEffect = {
      vertical:
        '\n      ' +
        transitionTime +
        's height cubic-bezier(.645, .045, .355, 1), \n      ' +
        transitionTime +
        's padding-top cubic-bezier(.645, .045, .355, 1), \n      ' +
        transitionTime +
        's padding-bottom cubic-bezier(.645, .045, .355, 1)',
      horizontal:
        '\n      ' +
        transitionTime +
        's width cubic-bezier(.645, .045, .355, 1), \n      ' +
        transitionTime +
        's padding-left cubic-bezier(.645, .045, .355, 1), \n      ' +
        transitionTime +
        's padding-right cubic-bezier(.645, .045, .355, 1)',
    };
    this.addTransitionListener();
  };
  Unfold.prototype.componentDidUpdate = function(prevProps, prevState) {
    if (!this.monitored) {
      this.addTransitionListener();
    }
    var prevVisible = prevProps.visible;
    var visible = this.props.visible;
    // to enter
    if (visible && !prevVisible) {
      this.rendered = true;
      this.showNode();
      // to leave
    } else if (!visible && prevVisible) {
      this.hideNode();
    }
  };
  Unfold.prototype.componentWillUnmount = function() {
    if (this.node) {
      this.node.removeEventListener('transitionend', this.handleTransitionEnd);
    }
  };
  Unfold.prototype.addTransitionListener = function() {
    if (!ReactDOM.findDOMNode(this)) {
      return;
    }
    this.node = ReactDOM.findDOMNode(this);
    this.node.addEventListener('transitionend', this.handleTransitionEnd);
    this.monitored = true;
    this.getNodeSize(this.node);
  };
  Unfold.prototype.getNodeSize = function(node) {
    var display = node.style.display;
    if (display === 'none') {
      node.style.display = '';
    }
    var _a = node.getBoundingClientRect(),
      top = _a.top,
      left = _a.left,
      right = _a.right,
      bottom = _a.bottom;
    var rectWidth = right - left;
    var rectHeight = bottom - top;
    var _b = node.style,
      paddingLeft = _b.paddingLeft,
      paddingRight = _b.paddingRight,
      paddingTop = _b.paddingTop,
      paddingBottom = _b.paddingBottom,
      borderTopWidth = _b.borderTopWidth,
      borderBottomWidth = _b.borderBottomWidth,
      borderLeftWidth = _b.borderLeftWidth,
      borderRightWidth = _b.borderRightWidth,
      width = _b.width,
      height = _b.height,
      overflowX = _b.overflowX,
      overflowY = _b.overflowY,
      overflow = _b.overflow;
    if (display === 'none') {
      node.style.display = display;
    }
    this.prevCssProp = {
      paddingLeft: paddingLeft,
      paddingRight: paddingRight,
      paddingTop: paddingTop,
      paddingBottom: paddingBottom,
      borderTopWidth: borderTopWidth,
      borderBottomWidth: borderBottomWidth,
      borderLeftWidth: borderLeftWidth,
      borderRightWidth: borderRightWidth,
      width: width || rectWidth + 'px',
      height: height || rectHeight + 'px',
      overflowX: overflowX,
      overflowY: overflowY,
      overflow: overflow,
    };
    this.prevSize = {
      width: width,
      height: height,
    };
  };
  Unfold.prototype.hideNode = function() {
    // 关闭时先获取最新的 node 数据
    this.getNodeSize(this.node);
    var _a = this,
      node = _a.node,
      leaveTo = _a.leaveTo,
      transitionEffect = _a.transitionEffect,
      prevCssProp = _a.prevCssProp;
    var vertical = this.props.vertical;
    var paddingLeft = prevCssProp.paddingLeft,
      paddingRight = prevCssProp.paddingRight,
      paddingTop = prevCssProp.paddingTop,
      paddingBottom = prevCssProp.paddingBottom,
      borderTopWidth = prevCssProp.borderTopWidth,
      borderBottomWidth = prevCssProp.borderBottomWidth,
      borderLeftWidth = prevCssProp.borderLeftWidth,
      borderRightWidth = prevCssProp.borderRightWidth,
      width = prevCssProp.width,
      height = prevCssProp.height;
    this.nodeDisplay = node.style.display;
    node.style.overflowX = 'hidden';
    node.style.overflowY = 'hidden';
    node.style.overflow = 'hidden';
    if (vertical) {
      this.setNodeStyle(this.node, {
        transition: '',
        paddingTop: paddingTop,
        paddingBottom: paddingBottom,
        borderTopWidth: borderTopWidth,
        borderBottomWidth: borderBottomWidth,
        width: width,
        height: height,
      });
      // inforce repaint
      this.node.getBoundingClientRect();
      this.setNodeStyle(
        this.node,
        __assign({ transition: transitionEffect.vertical }, leaveTo.vertical),
      );
    } else {
      this.setNodeStyle(this.node, {
        transition: '',
        paddingLeft: paddingLeft,
        paddingRight: paddingRight,
        borderLeftWidth: borderLeftWidth,
        borderRightWidth: borderRightWidth,
        width: width,
        height: height,
      });
      // inforce repaint
      this.node.getBoundingClientRect();
      this.setNodeStyle(
        this.node,
        __assign(
          { transition: transitionEffect.horizontal },
          leaveTo.horizontal,
        ),
      );
    }
  };
  Unfold.prototype.showNode = function() {
    var _a = this,
      node = _a.node,
      leaveTo = _a.leaveTo,
      transitionEffect = _a.transitionEffect,
      prevCssProp = _a.prevCssProp;
    var vertical = this.props.vertical;
    var paddingLeft = prevCssProp.paddingLeft,
      paddingRight = prevCssProp.paddingRight,
      paddingTop = prevCssProp.paddingTop,
      paddingBottom = prevCssProp.paddingBottom,
      borderTopWidth = prevCssProp.borderTopWidth,
      borderBottomWidth = prevCssProp.borderBottomWidth,
      borderLeftWidth = prevCssProp.borderLeftWidth,
      borderRightWidth = prevCssProp.borderRightWidth,
      width = prevCssProp.width,
      height = prevCssProp.height;
    node.style.display = this.nodeDisplay;
    node.style.overflowX = 'hidden';
    node.style.overflowY = 'hidden';
    node.style.overflow = 'hidden';
    if (vertical) {
      this.setNodeStyle(
        this.node,
        __assign({ transition: '' }, leaveTo.vertical),
      );
      // inforce repaint
      this.node.getBoundingClientRect();
      this.setNodeStyle(this.node, {
        transition: transitionEffect.vertical,
        paddingTop: paddingTop,
        paddingBottom: paddingBottom,
        borderTopWidth: borderTopWidth,
        borderBottomWidth: borderBottomWidth,
        height: height,
        width: width,
      });
    } else {
      this.setNodeStyle(
        this.node,
        __assign({ transition: '' }, leaveTo.horizontal),
      );
      // inforce repaint
      this.node.getBoundingClientRect();
      this.setNodeStyle(this.node, {
        transition: transitionEffect.horizontal,
        paddingLeft: paddingLeft,
        paddingRight: paddingRight,
        borderLeftWidth: borderLeftWidth,
        borderRightWidth: borderRightWidth,
        height: height,
        width: width,
      });
    }
  };
  Unfold.prototype.render = function() {
    var rendered = this.rendered;
    var _a = this.props,
      visible = _a.visible,
      children = _a.children,
      vertical = _a.vertical,
      transitionTime = _a.transitionTime,
      rest = __rest(_a, ['visible', 'children', 'vertical', 'transitionTime']);
    return (
      ((visible || rendered) && React.cloneElement(children, rest)) || null
    );
  };
  Unfold.displayName = componentName;
  Unfold.defaultProps = {
    vertical: false,
    transitionTime: 0.3,
  };
  Unfold.propTypes = {
    visible: PropTypes.bool.isRequired,
    vertical: PropTypes.bool,
    transitionTime: PropTypes.number,
  };
  return Unfold;
})(React.Component);
export default Unfold;
