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
import Transition from '../transition/Transition';
var componentName = 'Spin';
var Spin = /** @class */ (function(_super) {
  __extends(Spin, _super);
  function Spin() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Spin.prototype.render = function() {
    var cn = componentName;
    var _a = this.props,
      spinning = _a.spinning,
      size = _a.size,
      tip = _a.tip,
      className = _a.className,
      style = _a.style,
      children = _a.children;
    return React.createElement(
      'div',
      {
        className: classes(cn, 'wrapper', [className], {
          'with-children': !!children,
        }),
        style: style,
      },
      React.createElement('div', {
        className: classes(cn, 'mask', {
          active: !!children,
          spinning: spinning,
        }),
      }),
      React.createElement(
        Transition,
        {
          visible: !!spinning,
          beforeEnter: { opacity: 0 },
          afterEnter: { opacity: 1 },
        },
        React.createElement(
          'div',
          {
            className: classes(cn, 'container', {
              'with-children': !!children,
              'with-tip': !!tip,
            }),
          },
          React.createElement(Icon, {
            name: 'spin',
            size: size,
            className: classes(cn, ''),
          }),
          tip &&
            React.createElement('span', { className: classes(cn, 'tip') }, tip),
        ),
      ),
      children,
    );
  };
  Spin.displayName = componentName;
  Spin.defaultProps = {
    spinning: true,
    size: 16,
  };
  Spin.propTypes = {
    spinning: PropTypes.bool,
    size: PropTypes.number,
    tip: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
  };
  return Spin;
})(React.Component);
export default Spin;
