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
import Icon from '../icon/Icon';
var componentName = 'Star';
var Star = /** @class */ (function(_super) {
  __extends(Star, _super);
  function Star() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.getIconName = function() {
      var _a = _this.props,
        count = _a.count,
        index = _a.index;
      if (count - index < 0.5) {
        return 'empty';
      } else if (count - index === 0.5) {
        return 'half';
      } else if (count - index > 0.5) {
        return 'full';
      }
      return '';
    };
    _this.handleMouseEnter = function(position) {
      var _a = _this.props,
        index = _a.index,
        handleHover = _a.handleHover;
      if (handleHover) {
        handleHover(index, position);
      }
    };
    _this.handleClick = function(postion) {
      var _a = _this.props,
        index = _a.index,
        handleClick = _a.handleClick;
      if (handleClick) {
        handleClick(index, postion);
      }
    };
    return _this;
  }
  Star.prototype.render = function() {
    var _this = this;
    var cn = componentName;
    return React.createElement(
      'li',
      { className: classes(cn, '') },
      React.createElement(Icon, {
        name: this.getIconName(),
        size: 20,
        className: 'xue-rate-star-icon',
      }),
      React.createElement('div', {
        className: classes(cn, 'filler', ['left']),
        onMouseEnter: function() {
          return _this.handleMouseEnter('left');
        },
        onClick: function() {
          return _this.handleClick('left');
        },
      }),
      React.createElement('div', {
        className: classes(cn, 'filler', ['right']),
        onMouseEnter: function() {
          return _this.handleMouseEnter('right');
        },
        onClick: function() {
          return _this.handleClick('right');
        },
      }),
    );
  };
  Star.displayName = componentName;
  Star.propTypes = {
    count: PropTypes.number,
    index: PropTypes.number,
    handleHover: PropTypes.func,
    handleClick: PropTypes.func,
  };
  return Star;
})(React.Component);
export default Star;
