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
import * as ReactDOM from 'react-dom';
import * as PropTypes from 'prop-types';
import { classes } from '../utils';
import Transition from '../transition/Transition';
var componentName = 'LightUp';
var LightUp = /** @class */ (function(_super) {
  __extends(LightUp, _super);
  function LightUp() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.state = {
      visible: false,
      x: 0,
      y: 0,
    };
    _this.getImgSize = function() {
      _this.img = ReactDOM.findDOMNode(_this);
      var _a = _this.img.getBoundingClientRect(),
        left = _a.left,
        right = _a.right,
        bottom = _a.bottom,
        top = _a.top;
      _this.size = {
        width: right - left,
        height: bottom - top,
      };
    };
    _this.setWrapperSize = function() {
      var _a = _this,
        maskRef = _a.maskRef,
        wrapperRef = _a.wrapperRef;
      var _b = maskRef.getBoundingClientRect(),
        left = _b.left,
        right = _b.right,
        top = _b.top,
        bottom = _b.bottom;
      var clientWidth = right - left;
      var clientHeight = bottom - top;
      var _c = _this.size,
        width = _c.width,
        height = _c.height;
      // 以宽缩放
      if (clientWidth / width < clientHeight / height) {
        wrapperRef.style.width = clientWidth * 0.8 + 'px';
        wrapperRef.style.height = clientWidth * 0.8 * (height / width) + 'px';
        // 以高缩放
      } else {
        wrapperRef.style.height = clientHeight * 0.8 + 'px';
        wrapperRef.style.width = clientHeight * 0.8 * (width / height) + 'px';
      }
    };
    _this.handleClickImg = function(e) {
      _this.setState(
        {
          visible: true,
          x: e.clientX,
          y: e.clientY,
        },
        _this.setWrapperSize,
      );
    };
    _this.handleClickNewImg = function() {
      if (_this.props.imgClosable) {
        _this.setState({
          visible: false,
        });
      }
    };
    _this.saveMaskRef = function(node) {
      _this.maskRef = node;
    };
    _this.saveWrapperRef = function(node) {
      _this.wrapperRef = node;
    };
    _this.appendNewImg = function(src, alt) {
      var cn = componentName;
      var _a = _this.state,
        x = _a.x,
        y = _a.y,
        visible = _a.visible;
      return ReactDOM.createPortal(
        React.createElement(
          React.Fragment,
          null,
          React.createElement(
            Transition,
            {
              visible: visible,
              beforeEnter: { opacity: 0 },
              afterEnter: { opacity: 1 },
            },
            React.createElement('div', {
              className: classes(cn, 'mask'),
              onClick: function() {
                return _this.setState({ visible: false });
              },
              ref: _this.saveMaskRef,
            }),
          ),
          React.createElement(
            Transition,
            {
              visible: visible,
              beforeEnter: {
                transform: 'translateX(-50%) translateY(-50%) scale(0)',
                top: y + 'px',
                left: x + 'px',
              },
              afterEnter: {
                transform: 'translateX(-50%) translateY(-50%) scale(1)',
                top: '50%',
                left: '50%',
              },
            },
            React.createElement(
              'div',
              {
                className: classes(cn, 'img-wrapper'),
                ref: _this.saveWrapperRef,
              },
              React.createElement('img', {
                src: src,
                alt: alt,
                className: classes(cn, 'img'),
                onClick: _this.handleClickNewImg,
              }),
            ),
          ),
        ),
        document.body,
      );
    };
    _this.renderChildren = function() {
      var _a = _this.props,
        src = _a.src,
        children = _a.children;
      var img = React.Children.only(children);
      var _b = img.props,
        imgSrc = _b.src,
        alt = _b.alt;
      return React.createElement(
        React.Fragment,
        null,
        React.cloneElement(img, {
          onLoad: _this.getImgSize,
          onClick: _this.handleClickImg,
        }),
        _this.appendNewImg(src || imgSrc, alt),
      );
    };
    return _this;
  }
  LightUp.prototype.render = function() {
    return this.renderChildren();
  };
  LightUp.displayName = componentName;
  LightUp.defaultProps = {
    imgClosable: false,
  };
  LightUp.propTypes = {
    src: PropTypes.string,
    imgClosable: PropTypes.bool,
  };
  return LightUp;
})(React.Component);
export default LightUp;
