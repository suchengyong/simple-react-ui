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
var componentName = 'Transition';
var Transition = /** @class */ (function(_super) {
  __extends(Transition, _super);
  function Transition() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.monitored = false;
    _this.setNodeStyle = function(node, cssProp) {
      Object.keys(cssProp).forEach(function(key) {
        node.style[key] = cssProp[key];
      });
    };
    _this.handleTransitionEnd = function(e) {
      var visible = _this.props.visible;
      if (!visible && _this.node) {
        _this.node.style.display = 'none';
      }
    };
    return _this;
  }
  Transition.prototype.componentDidMount = function() {
    var visible = this.props.visible;
    if (visible) {
      this.rendered = true;
    }
    this.addTransitionListener();
  };
  Transition.prototype.componentDidUpdate = function(prevProps, prevState) {
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
  Transition.prototype.componentWillUnmount = function() {
    if (this.node) {
      this.node.removeEventListener('transitionend', this.handleTransitionEnd);
    }
  };
  Transition.prototype.addTransitionListener = function() {
    if (!ReactDOM.findDOMNode(this)) {
      return;
    }
    this.node = ReactDOM.findDOMNode(this);
    this.node.addEventListener('transitionend', this.handleTransitionEnd);
    this.monitored = true;
  };
  Transition.prototype.hideNode = function() {
    var _a = this.props,
      transitionActive = _a.transitionActive,
      beforeLeave = _a.beforeLeave,
      afterLeave = _a.afterLeave,
      beforeEnter = _a.beforeEnter,
      afterEnter = _a.afterEnter;
    this.nodeDisplay = this.node.style.display;
    this.setNodeStyle(
      this.node,
      __assign({ transition: '' }, beforeLeave || afterEnter || {}),
    );
    // inforce repaint
    this.node.getBoundingClientRect();
    this.setNodeStyle(
      this.node,
      __assign(__assign({}, transitionActive), afterLeave || beforeEnter || {}),
    );
  };
  Transition.prototype.showNode = function() {
    var _a = this.props,
      transitionActive = _a.transitionActive,
      beforeLeave = _a.beforeLeave,
      afterLeave = _a.afterLeave,
      beforeEnter = _a.beforeEnter,
      afterEnter = _a.afterEnter;
    this.node.style.display = this.nodeDisplay;
    this.setNodeStyle(
      this.node,
      __assign({ transition: '' }, beforeEnter || afterLeave || {}),
    );
    // inforce repaint
    this.node.getBoundingClientRect();
    this.setNodeStyle(
      this.node,
      __assign(__assign({}, transitionActive), afterEnter || beforeLeave || {}),
    );
  };
  Transition.prototype.render = function() {
    var rendered = this.rendered;
    var _a = this.props,
      visible = _a.visible,
      children = _a.children,
      afterEnter = _a.afterEnter,
      afterLeave = _a.afterLeave,
      beforeEnter = _a.beforeEnter,
      beforeLeave = _a.beforeLeave,
      transitionActive = _a.transitionActive,
      rest = __rest(_a, [
        'visible',
        'children',
        'afterEnter',
        'afterLeave',
        'beforeEnter',
        'beforeLeave',
        'transitionActive',
      ]);
    return (
      ((visible || rendered) && React.cloneElement(children, rest)) || null
    );
  };
  Transition.displayName = componentName;
  Transition.defaultProps = {
    transitionActive: {
      transition: '300ms all cubic-bezier(.645, .045, .355, 1)',
    },
  };
  Transition.propTypes = {
    visible: PropTypes.bool.isRequired,
    afterEnter: PropTypes.object,
    afterLeave: PropTypes.object,
    beforeEnter: PropTypes.object,
    beforeLeave: PropTypes.object,
    transitionActive: PropTypes.object,
  };
  return Transition;
})(React.Component);
export default Transition;
