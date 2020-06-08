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
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as PropTypes from 'prop-types';
import { classes } from '../utils';
import Transition from '../transition/Transition';
var componentName = 'Popover';
var Popover = /** @class */ (function(_super) {
  __extends(Popover, _super);
  function Popover(props) {
    var _this = _super.call(this, props) || this;
    _this.delay = 200;
    _this.saveWrapperRef = function(node) {
      _this.wrapperRef = node;
    };
    _this.saveContentRef = function(node) {
      _this.contentRef = node;
    };
    _this.saveArrowRef = function(node) {
      _this.arrowRef = node;
    };
    // 设置箭头图标颜色
    _this.setArrowBorderColor = function() {
      var _a = _this,
        contentRef = _a.contentRef,
        arrowRef = _a.arrowRef;
      var position = _this.props.position;
      if (!contentRef) {
        return;
      }
      var color = window.getComputedStyle(contentRef).backgroundColor;
      arrowRef.style.borderTopColor = color;
      arrowRef.style.borderBottomColor = color;
      arrowRef.style.borderLeftColor = color;
      arrowRef.style.borderRightColor = color;
      switch (position) {
        case 'top':
          arrowRef.style.borderTopColor = 'transparent';
          arrowRef.style.borderLeftColor = 'transparent';
          break;
        case 'bottom':
          arrowRef.style.borderBottomColor = 'transparent';
          arrowRef.style.borderRightColor = 'transparent';
          break;
        case 'left':
          arrowRef.style.borderBottomColor = 'transparent';
          arrowRef.style.borderLeftColor = 'transparent';
          break;
        case 'right':
          arrowRef.style.borderTopColor = 'transparent';
          arrowRef.style.borderRightColor = 'transparent';
          break;
        default:
          break;
      }
    };
    // 定位 pop
    _this.locateContent = function() {
      var _a = _this,
        wrapperRef = _a.wrapperRef,
        triggerNode = _a.triggerNode;
      var _b = triggerNode.getBoundingClientRect(),
        triggerTop = _b.top,
        triggerLeft = _b.left,
        triggerRight = _b.right,
        triggerBottom = _b.bottom;
      var triggerWidth = triggerRight - triggerLeft;
      var triggerHeight = triggerBottom - triggerTop;
      var scrollX = window.scrollX,
        scrollY = window.scrollY;
      var position = _this.props.position;
      switch (position) {
        case 'top':
          wrapperRef.style.left =
            triggerLeft + scrollX + triggerWidth / 2 + 'px';
          wrapperRef.style.top = triggerTop + scrollY + 'px';
          break;
        case 'bottom':
          wrapperRef.style.left =
            triggerLeft + scrollX + triggerWidth / 2 + 'px';
          wrapperRef.style.top = triggerBottom + scrollY + 'px';
          break;
        case 'left':
          wrapperRef.style.left = triggerLeft + scrollX + 'px';
          wrapperRef.style.top =
            triggerTop + triggerHeight / 2 + scrollY + 'px';
          break;
        case 'right':
          wrapperRef.style.left = triggerRight + scrollX + 'px';
          wrapperRef.style.top =
            triggerTop + triggerHeight / 2 + scrollY + 'px';
          break;
        default:
          break;
      }
    };
    _this.handleClick = function(e) {
      _this.triggerNode = e.currentTarget;
      var derivedVisible = _this.state.derivedVisible;
      var trigger = _this.props.trigger;
      if (!derivedVisible && trigger === 'click') {
        _this.open();
      }
    };
    // 监听点击 document
    _this.handleClickDocument = function(e) {
      var popClosable = _this.props.popClosable;
      if (popClosable) {
        _this.close();
        return;
      }
      var target = e.target;
      if (!_this.wrapperRef.contains(target)) {
        _this.close();
      }
    };
    _this.handleMouseEnter = function(e) {
      _this.triggerNode = e.currentTarget;
      var trigger = _this.props.trigger;
      if (trigger === 'hover') {
        _this.open();
        if (_this.timeout) {
          window.clearTimeout(_this.timeout);
          _this.timeout = null;
        }
      }
    };
    _this.handleMouseLeave = function(e) {
      var trigger = _this.props.trigger;
      if (trigger === 'hover') {
        _this.timeout = setTimeout(function() {
          _this.close();
        }, _this.delay);
      }
    };
    _this.handleMouseEnterPop = function(e) {
      var trigger = _this.props.trigger;
      if (trigger === 'hover' && _this.timeout) {
        window.clearTimeout(_this.timeout);
        _this.timeout = null;
      }
    };
    _this.handleMouseLeavePop = function(e) {
      var trigger = _this.props.trigger;
      if (trigger === 'hover' && !_this.timeout) {
        _this.timeout = setTimeout(function() {
          _this.close();
        }, _this.delay);
      }
    };
    _this.handleFocus = function(e) {
      _this.triggerNode = e.currentTarget;
      var trigger = _this.props.trigger;
      if (trigger === 'focus') {
        _this.open();
      }
    };
    _this.handleBlur = function(e) {
      var trigger = _this.props.trigger;
      if (trigger === 'focus') {
        _this.close();
      }
    };
    _this.open = function() {
      _this.setState({
        derivedVisible: true,
      });
      var onVisibleChange = _this.props.onVisibleChange;
      if (onVisibleChange) {
        onVisibleChange(true);
      }
    };
    _this.close = function() {
      _this.setState({
        derivedVisible: false,
      });
      var onVisibleChange = _this.props.onVisibleChange;
      if (onVisibleChange) {
        onVisibleChange(false);
      }
    };
    // 获取监听 props
    _this.getChildrenEventHandlers = function() {
      var _a = _this,
        onClick = _a.handleClick,
        onMouseEnter = _a.handleMouseEnter,
        onMouseLeave = _a.handleMouseLeave,
        onFocus = _a.handleFocus,
        onBlur = _a.handleBlur;
      var trigger = _this.props.trigger;
      if (trigger === 'click') {
        return { onClick: onClick };
      } else if (trigger === 'hover') {
        return { onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave };
      }
      return { onFocus: onFocus, onBlur: onBlur };
    };
    _this.state = {
      derivedVisible: props.defaultVisible,
    };
    return _this;
  }
  Popover.getDerivedStateFromProps = function(nextProps, prevState) {
    var visible = nextProps.visible;
    if ('visible' in nextProps) {
      return { derivedVisible: visible };
    }
    return null;
  };
  Popover.prototype.componentDidMount = function() {
    if (this.state.derivedVisible) {
      this.locateContent();
      this.setArrowBorderColor();
    }
  };
  Popover.prototype.componentDidUpdate = function(prevProps, prevState) {
    var prevDerivedVisible = prevState.derivedVisible;
    var derivedVisible = this.state.derivedVisible;
    var trigger = this.props.trigger;
    // false => true，打开，定位
    if (!prevDerivedVisible && derivedVisible) {
      this.locateContent();
      this.setArrowBorderColor();
      // 触发方式是 'click', 监听
      if (trigger === 'click') {
        document.addEventListener('click', this.handleClickDocument);
      }
    }
    // true => false，关闭，触发方式是 'click' 时移除监听
    if (prevDerivedVisible && !derivedVisible && trigger === 'click') {
      document.removeEventListener('click', this.handleClickDocument);
    }
  };
  Popover.prototype.componentWillUnmount = function() {
    document.removeEventListener('click', this.handleClickDocument);
    if (this.timeout) {
      window.clearTimeout(this.timeout);
    }
  };
  // 渲染 children 时传递监听 props
  Popover.prototype.renderChildren = function() {
    var children = this.props.children;
    if (!children) {
      return null;
    }
    return typeof children === 'string'
      ? React.createElement(
          'span',
          __assign({}, this.getChildrenEventHandlers()),
          children,
        )
      : React.cloneElement(
          React.Children.only(children),
          this.getChildrenEventHandlers(),
        );
  };
  Popover.prototype.render = function() {
    var cn = componentName;
    var _a = this.props,
      content = _a.content,
      position = _a.position,
      className = _a.className,
      style = _a.style;
    var derivedVisible = this.state.derivedVisible;
    var wrapperClassName = classes(cn, 'content-wrapper', [
      'position-' + position,
    ]);
    var contentClassName = classes(cn, 'content', [className]);
    return React.createElement(
      React.Fragment,
      null,
      React.createElement(
        Transition,
        {
          visible: derivedVisible,
          beforeEnter: { opacity: 0 },
          afterEnter: { opacity: 1 },
        },
        React.createElement(
          React.Fragment,
          null,
          ReactDOM.createPortal(
            React.createElement(
              'div',
              {
                className: wrapperClassName,
                ref: this.saveWrapperRef,
                onMouseEnter: this.handleMouseEnterPop,
                onMouseLeave: this.handleMouseLeavePop,
              },
              React.createElement(
                'div',
                {
                  className: contentClassName,
                  style: style,
                  ref: this.saveContentRef,
                },
                content,
                React.createElement('div', {
                  className: classes(cn, 'content-arrow', [
                    'position-' + position,
                  ]),
                  ref: this.saveArrowRef,
                }),
              ),
            ),
            document.body,
          ),
        ),
      ),
      this.renderChildren(),
    );
  };
  Popover.displayName = componentName;
  Popover.defaultProps = {
    trigger: 'hover',
    position: 'top',
    defaultVisible: false,
    popClosable: false,
  };
  Popover.propTypes = {
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
      .isRequired,
    trigger: PropTypes.oneOf(['click', 'hover', 'focus']),
    position: PropTypes.oneOf(['top', 'left', 'right', 'bottom']),
    defaultVisible: PropTypes.bool,
    visible: PropTypes.bool,
    onVisibleChange: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
    popClosable: PropTypes.bool,
  };
  return Popover;
})(React.Component);
export default Popover;
