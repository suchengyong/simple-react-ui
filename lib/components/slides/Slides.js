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
var componentName = 'Slides';
var Slides = /** @class */ (function(_super) {
  __extends(Slides, _super);
  function Slides() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.state = {
      hasTransitionClassName: true,
      current: 1,
    };
    _this.isTransitioning = false;
    _this.length = 0;
    _this.prevIndex = 1;
    _this.saveContinerRef = function(ele) {
      _this.containerRef = ele;
    };
    _this.handleTransitionEnd = function() {
      _this.isTransitioning = false;
      var _a = _this,
        prevIndex = _a.prevIndex,
        length = _a.length;
      var afterChange = _this.props.afterChange;
      var current = _this.state.current;
      if (afterChange) {
        afterChange(current, prevIndex);
      }
      // first => last
      if (current === length && prevIndex === 1) {
        _this.setState(
          {
            hasTransitionClassName: false,
          },
          function() {
            return _this.controllContainer(length);
          },
        );
        // last => first
      } else if (current === 1 && prevIndex === length) {
        _this.setState(
          {
            hasTransitionClassName: false,
          },
          function() {
            _this.controllContainer(1);
          },
        );
      }
    };
    _this.handleMouseEnter = function() {
      var duration = _this.props.duration;
      var timeout = _this.timeout;
      if (duration && timeout) {
        window.clearTimeout(timeout);
      }
    };
    _this.handleMouseLeave = function() {
      var duration = _this.props.duration;
      if (duration) {
        _this.autoPlay();
      }
    };
    return _this;
  }
  Slides.prototype.componentDidMount = function() {
    this.cloneNode();
    var duration = this.props.duration;
    this.containerRef.addEventListener(
      'transitionend',
      this.handleTransitionEnd,
    );
    if (duration) {
      this.autoPlay();
    }
  };
  Slides.prototype.componentWillUnmount = function() {
    var _a = this,
      containerRef = _a.containerRef,
      timeout = _a.timeout;
    if (timeout) {
      window.clearTimeout(timeout);
    }
    containerRef.removeEventListener('transitionend', this.handleTransitionEnd);
  };
  Slides.prototype.cloneNode = function() {
    var nodeList = [];
    this.containerRef.childNodes.forEach(function(node) {
      if (node.nodeType === 1) {
        var eleNode = node;
        nodeList.push(eleNode);
        eleNode.style['flex-shrink'] = 0;
      }
    });
    this.length = nodeList.length;
    // append the clone to container
    this.containerRef.append(nodeList[0].cloneNode(true));
    this.containerRef.prepend(nodeList[nodeList.length - 1].cloneNode(true));
  };
  Slides.prototype.autoPlay = function() {
    var _this = this;
    var duration = this.props.duration;
    var play = function() {
      _this.next();
      _this.timeout = setTimeout(function() {
        play();
      }, duration * 1000);
    };
    this.timeout = setTimeout(function() {
      play();
    }, duration * 1000);
  };
  Slides.prototype.next = function() {
    var length = this.length;
    var current = this.state.current;
    if (current < length) {
      this.goTo(current + 1);
    } else {
      this.goTo(1);
    }
  };
  Slides.prototype.prev = function() {
    var length = this.length;
    var current = this.state.current;
    if (current > 1) {
      this.goTo(current - 1);
    } else {
      this.goTo(length);
    }
  };
  Slides.prototype.goTo = function(n) {
    var current = this.state.current;
    if (n > this.length || n < 1 || n === current || this.isTransitioning) {
      return;
    }
    this.prevIndex = current;
    this.setCurrent(n);
  };
  Slides.prototype.setCurrent = function(n) {
    if (!this.state.hasTransitionClassName) {
      this.setState({
        hasTransitionClassName: true,
      });
    }
    this.isTransitioning = true;
    if (n === this.length && this.prevIndex === 1) {
      this.controllContainer(0);
      // last => first
    } else if (n === 1 && this.prevIndex === this.length) {
      this.controllContainer(this.length + 1);
      // normal
    } else {
      this.controllContainer(n);
    }
    var beforeChange = this.props.beforeChange;
    if (beforeChange) {
      beforeChange(this.state.current, n);
    }
    this.setState({
      current: n,
    });
  };
  Slides.prototype.controllContainer = function(n) {
    this.containerRef.style.transform = 'translateX(' + -100 * n + '%)';
  };
  Slides.prototype.render = function() {
    var _this = this;
    var cn = componentName;
    var _a = this.props,
      children = _a.children,
      dots = _a.dots,
      className = _a.className,
      style = _a.style;
    var _b = this.state,
      hasTransitionClassName = _b.hasTransitionClassName,
      current = _b.current;
    var containerClassName = classes(cn, 'container', {
      'has-transition-class-name': hasTransitionClassName,
    });
    return React.createElement(
      'div',
      {
        className: classes(cn, '', [className]),
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        style: style,
      },
      React.createElement(
        'div',
        { className: containerClassName, ref: this.saveContinerRef },
        children,
      ),
      dots &&
        React.createElement(
          'div',
          { className: classes(cn, 'dots-wrapper') },
          React.Children.map(children, function(child, index) {
            return React.createElement('span', {
              className: classes(cn, 'dot', {
                active: current === index + 1,
              }),
              onClick: function() {
                return _this.goTo(index + 1);
              },
            });
          }),
        ),
    );
  };
  Slides.displayName = componentName;
  Slides.defaultProps = {
    duration: 0,
    dots: true,
  };
  Slides.propTypes = {
    duration: PropTypes.number,
    dots: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
    beforeChange: PropTypes.func,
    afterChange: PropTypes.func,
  };
  return Slides;
})(React.Component);
export default Slides;
