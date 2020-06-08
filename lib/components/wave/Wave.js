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
import classes from '../utils/classes';
var componentName = 'Wave';
var Wave = /** @class */ (function(_super) {
  __extends(Wave, _super);
  function Wave() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.animating = false;
    _this.animatingClassName = 'xue-react-wave-animation-animating';
    _this.animationStart = function() {
      if (_this.animating || _this.props.closeWave) {
        return;
      }
      _this.animating = true;
      _this.originClassName = _this.node.className;
      _this.node.className = classes('', [
        _this.originClassName,
        _this.animatingClassName,
      ]);
      _this.node.addEventListener('animationend', _this.animationEnd);
    };
    _this.animationEnd = function() {
      _this.animating = false;
      _this.node.className = classes('', [_this.originClassName]);
      _this.node.removeEventListener('animationend', _this.animationEnd);
    };
    return _this;
  }
  Wave.prototype.componentDidMount = function() {
    this.node = ReactDOM.findDOMNode(this);
    this.node.addEventListener('click', this.animationStart);
  };
  Wave.prototype.componentWillUnmount = function() {
    this.node.removeEventListener('click', this.animationStart);
    this.node.removeEventListener('animationend', this.animationEnd);
  };
  Wave.prototype.render = function() {
    var children = this.props.children;
    return typeof children === 'string'
      ? React.createElement(
          'span',
          { className: 'xue-wave-string-wrapper' },
          children,
        )
      : children;
  };
  Wave.displayName = componentName;
  Wave.defaultProps = {
    closeWave: false,
  };
  Wave.propTypes = {
    closeWave: PropTypes.bool,
  };
  return Wave;
})(React.Component);
export default Wave;
