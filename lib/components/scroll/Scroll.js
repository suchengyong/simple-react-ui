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
var componentName = 'Scroll';
var Scroll = /** @class */ (function(_super) {
  __extends(Scroll, _super);
  function Scroll() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.state = {
      translateY: 0,
      yVisible: true,
    };
    // 获取各个元素最新的宽高、最大滚动宽高等
    _this.getElRect = function() {
      var _a = _this.wrapperRef.getBoundingClientRect(),
        wrapperTop = _a.top,
        wrapperBottom = _a.bottom;
      var _b = _this.containerRef.getBoundingClientRect(),
        containerTop = _b.top,
        containerBottom = _b.bottom;
      var _c = _this.yBarRef.getBoundingClientRect(),
        barTop = _c.top,
        barBottom = _c.bottom;
      // 高度
      _this.wrapperHeight = wrapperBottom - wrapperTop;
      _this.containerHeight = containerBottom - containerTop;
      _this.barHeight = barBottom - barTop;
      _this.maxContainerScrollHeight =
        _this.containerHeight - _this.wrapperHeight;
      _this.maxBarScrollHeight = _this.wrapperHeight - _this.barHeight;
    };
    _this.saveWrapperRef = function(node) {
      _this.wrapperRef = node;
    };
    _this.saveContainerRef = function(node) {
      _this.containerRef = node;
    };
    _this.saveYBarRef = function(node) {
      _this.yBarRef = node;
    };
    _this.saveYTrackRef = function(node) {
      _this.yTrackRef = node;
    };
    _this.handleWheel = function(e) {
      _this.getElRect();
      e.preventDefault();
      var translateY = _this.state.translateY;
      var deltaY = e.deltaY;
      // 到顶了向上
      if (translateY === 0 && deltaY < 0) {
        return;
        // 到底了向下
      } else if (
        Math.abs(translateY) + _this.wrapperHeight >= _this.containerHeight &&
        deltaY > 0
      ) {
        return;
      }
      _this.setState({
        translateY: _this.getTranslateY(deltaY),
      });
    };
    // 设置 bar 的滚动距离
    _this.updateBar = function(translateY) {
      var barTranslateY =
        translateY *
        ((_this.wrapperHeight - _this.barHeight) /
          (_this.containerHeight - _this.wrapperHeight));
      _this.yBarRef.style.transform = 'translateY(' + -barTranslateY + 'px)';
    };
    _this.getTranslateY = function(deltaY) {
      var translateY = _this.calculateTranslateYFromDeltaY(deltaY);
      if (translateY > 0) {
        return 0;
      } else if (translateY < -_this.maxContainerScrollHeight) {
        return -_this.maxContainerScrollHeight;
      }
      return translateY;
    };
    _this.calculateTranslateYFromDeltaY = function(deltaY) {
      var translateY = _this.state.translateY;
      // 向下 限速
      if (deltaY > 20) {
        return translateY - 20 * 3;
        // 向上 限速
      } else if (deltaY < -20) {
        return translateY + 20 * 3;
      } else {
        return translateY - deltaY * 3;
      }
    };
    _this.handleMouseDown = function(e) {
      _this.barStartTranslateY =
        _this.yBarRef.getBoundingClientRect().top -
        _this.wrapperRef.getBoundingClientRect().top;
      _this.startClientY = e.clientY;
      document.addEventListener('mousemove', _this.handleMouseMove);
      document.addEventListener('mouseup', _this.handleMouseUp);
      _this.mouseDown = true;
      _this.userSelect = _this.containerRef.style.userSelect;
      _this.containerRef.style.userSelect = 'none';
    };
    // 点击后拖动距离 -barStartTranslateY -> maxBarScrollHeight-barStartTranslateY
    _this.handleMouseMove = function(e) {
      _this.getElRect();
      var clientY = e.clientY;
      var deltaY = clientY - _this.startClientY;
      if (deltaY <= -_this.barStartTranslateY) {
        _this.setState({
          translateY: 0,
        });
      } else if (
        deltaY >=
        _this.maxBarScrollHeight - _this.barStartTranslateY
      ) {
        _this.setState({
          translateY: -_this.maxContainerScrollHeight,
        });
      } else {
        _this.setState({
          translateY:
            -_this.maxContainerScrollHeight *
            ((_this.barStartTranslateY + deltaY) / _this.maxBarScrollHeight),
        });
      }
    };
    _this.handleMouseUp = function(e) {
      document.removeEventListener('mousemove', _this.handleMouseMove);
      document.removeEventListener('mouseup', _this.handleMouseUp);
      _this.mouseDown = false;
      _this.containerRef.style.userSelect = _this.userSelect;
      if (!_this.mouseIn && _this.state.yVisible && !_this.props.yBarVisible) {
        _this.setState({
          yVisible: false,
        });
      }
    };
    // 鼠标进入 scroll 判断是否需要显示滚动条
    _this.handleMouseEnter = function() {
      _this.mouseIn = true;
      var yVisible = _this.state.yVisible;
      if (!yVisible) {
        _this.setState({
          yVisible: _this.wrapperHeight < _this.containerHeight,
        });
      }
    };
    _this.handleMouseLeave = function() {
      _this.mouseIn = false;
      if (
        _this.state.yVisible &&
        !_this.props.yBarVisible &&
        !_this.mouseDown
      ) {
        _this.setState({
          yVisible: false,
        });
      }
    };
    // 点击 track 时滚动
    _this.handleClickTrack = function(e) {
      if (e.target !== _this.yTrackRef) {
        return;
      }
      _this.getElRect();
      var distance =
        e.clientY -
        _this.yTrackRef.getBoundingClientRect().top -
        _this.barHeight / 2;
      if (distance < _this.maxBarScrollHeight) {
        _this.setState({
          translateY:
            -_this.maxContainerScrollHeight *
            (distance / _this.maxBarScrollHeight),
        });
      } else {
        _this.setState({
          translateY: -_this.maxContainerScrollHeight,
        });
      }
    };
    return _this;
  }
  Scroll.prototype.componentDidMount = function() {
    this.getElRect();
    var yBarVisible = this.props.yBarVisible;
    var yVisible = this.state.yVisible;
    if (yBarVisible !== yVisible) {
      this.setState({
        yVisible: yBarVisible,
      });
    }
  };
  Scroll.prototype.componentDidUpdate = function(prevProps, prevState) {
    var onScroll = this.props.onScroll;
    var translateY = this.state.translateY;
    if (prevState.translateY !== translateY) {
      this.updateBar(translateY);
      if (onScroll) {
        onScroll(translateY);
      }
    }
  };
  Scroll.prototype.componentWillUnmount = function() {
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mouseup', this.handleMouseUp);
  };
  Scroll.prototype.render = function() {
    var cn = componentName;
    var _a = this.props,
      className = _a.className,
      style = _a.style,
      yTrackClassName = _a.yTrackClassName,
      yTrackStyle = _a.yTrackStyle,
      yBarClassName = _a.yBarClassName,
      yBarStyle = _a.yBarStyle,
      children = _a.children;
    var _b = this.state,
      translateY = _b.translateY,
      yVisible = _b.yVisible;
    return React.createElement(
      'div',
      {
        className: classes(cn, 'wrapper', [className]),
        onWheel: this.handleWheel,
        ref: this.saveWrapperRef,
        style: style,
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
      },
      React.createElement(
        'div',
        {
          className: classes(cn, 'container'),
          ref: this.saveContainerRef,
          style: { transform: 'translateY(' + translateY + 'px)' },
        },
        children,
      ),
      React.createElement(
        'div',
        {
          className: classes(cn, 'y-track', [yTrackClassName], {
            'y-visible': yVisible,
          }),
          onClick: this.handleClickTrack,
          ref: this.saveYTrackRef,
          style: yTrackStyle,
        },
        React.createElement('div', {
          className: classes(cn, 'bar', [yBarClassName]),
          ref: this.saveYBarRef,
          onMouseDown: this.handleMouseDown,
          style: yBarStyle,
        }),
      ),
    );
  };
  Scroll.displayName = componentName;
  Scroll.defaultProps = {
    yBarVisible: false,
  };
  Scroll.propTypes = {
    yBarVisible: PropTypes.bool,
    xBarVisible: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
    yTrackClassName: PropTypes.string,
    yTrackStyle: PropTypes.object,
    yBarClassName: PropTypes.string,
    yBarStyle: PropTypes.object,
  };
  return Scroll;
})(React.Component);
export default Scroll;
