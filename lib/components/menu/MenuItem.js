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
import Transition from '../transition/Transition';
var componentName = 'MenuItem';
var MenuItem = /** @class */ (function(_super) {
  __extends(MenuItem, _super);
  function MenuItem() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  MenuItem.prototype.render = function() {
    var cn = componentName;
    var _a = this.props,
      uniqueKey = _a.uniqueKey,
      selectedKey = _a.selectedKey,
      handleSelectedKey = _a.handleSelectedKey,
      children = _a.children,
      className = _a.className,
      style = _a.style,
      mode = _a.mode,
      theme = _a.theme;
    return React.createElement(
      'li',
      {
        className: classes(cn, '', [className, theme, mode], {
          active: uniqueKey === selectedKey,
        }),
        style: style,
        onClick: function() {
          return handleSelectedKey(uniqueKey);
        },
      },
      children,
      mode === 'vertical' &&
        theme === 'light' &&
        React.createElement(
          Transition,
          {
            visible: uniqueKey === selectedKey && mode === 'vertical',
            beforeEnter: { height: '0', top: '50%', opacity: 0 },
            afterEnter: { height: '100%', top: '0', opacity: 1 },
          },
          React.createElement('div', { className: classes(cn, 'filler') }),
        ),
    );
  };
  MenuItem.displayName = componentName;
  MenuItem.propTypes = {
    uniqueKey: PropTypes.string,
    selectedKey: PropTypes.string,
    expandKeys: PropTypes.arrayOf(PropTypes.string),
    mode: PropTypes.oneOf(['vertical', 'horizontal']),
    theme: PropTypes.oneOf(['light', 'dark']),
    onSelectedChange: PropTypes.func,
    onExpandChange: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
  };
  return MenuItem;
})(React.Component);
export default MenuItem;
