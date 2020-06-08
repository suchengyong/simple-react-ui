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
var __spreadArrays =
  (this && this.__spreadArrays) ||
  function() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++)
      s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
    return r;
  };
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { arrayIsEqual, classes } from '../utils';
var componentName = 'Menu';
var Menu = /** @class */ (function(_super) {
  __extends(Menu, _super);
  function Menu(props) {
    var _this = _super.call(this, props) || this;
    _this.renderChildren = function() {
      var _a = _this,
        handleSelectedKey = _a.handleSelectedKey,
        handleExpandKeys = _a.handleExpandKeys;
      var _b = _this.props,
        mode = _b.mode,
        theme = _b.theme,
        children = _b.children;
      var _c = _this.state,
        derivedSelectedKey = _c.derivedSelectedKey,
        derivedExpandKeys = _c.derivedExpandKeys;
      return React.Children.map(children, function(child, index) {
        var uniqueKey = _this.getUniqueKeyFromChild(child, index);
        return React.cloneElement(child, {
          uniqueKey: uniqueKey,
          selectedKey: derivedSelectedKey,
          expandKeys: derivedExpandKeys,
          handleSelectedKey: handleSelectedKey,
          handleExpandKeys: handleExpandKeys,
          mode: mode,
          theme: theme,
        });
      });
    };
    _this.getUniqueKeyFromChild = function(child, index) {
      return child.key || 'item-' + index;
    };
    _this.handleSelectedKey = function(key) {
      var _a = _this.props,
        onSelectedChange = _a.onSelectedChange,
        mode = _a.mode;
      var _b = _this.state,
        derivedSelectedKey = _b.derivedSelectedKey,
        derivedExpandKeys = _b.derivedExpandKeys;
      if (mode === 'vertical') {
        if (key !== derivedSelectedKey) {
          _this.setState({ derivedSelectedKey: key });
          if (onSelectedChange) {
            onSelectedChange(key, derivedExpandKeys);
          }
        }
      } else if (mode === 'horizontal') {
        if (key !== derivedSelectedKey) {
          _this.setState({ derivedSelectedKey: key, derivedExpandKeys: [] });
          if (onSelectedChange) {
            onSelectedChange(key, []);
          }
        }
      }
    };
    _this.handleExpandKeys = function(key) {
      var newExpandKeys = _this.getNewExpandKeys(key);
      _this.setState({ derivedExpandKeys: newExpandKeys });
      if (_this.props.onExpandChange) {
        _this.props.onExpandChange(newExpandKeys);
      }
    };
    _this.getNewExpandKeys = function(key) {
      var derivedExpandKeys = _this.state.derivedExpandKeys;
      return derivedExpandKeys.indexOf(key) > -1
        ? derivedExpandKeys.filter(function(item) {
            return item !== key;
          })
        : __spreadArrays([key], derivedExpandKeys);
    };
    var defaultSelectedKey = props.defaultSelectedKey,
      defaultExpandKeys = props.defaultExpandKeys;
    _this.state = {
      derivedSelectedKey:
        'defaultSelectedKey' in props ? defaultSelectedKey : '',
      derivedExpandKeys: 'defaultExpandKeys' in props ? defaultExpandKeys : [],
    };
    return _this;
  }
  Menu.getDerivedStateFromProps = function(nextProps, prevState) {
    var selectedKey = nextProps.selectedKey,
      expandKeys = nextProps.expandKeys;
    var derivedSelectedKey = prevState.derivedSelectedKey,
      derivedExpandKeys = prevState.derivedExpandKeys;
    var shouldChangeSelectedKey =
      'selectedKey' in nextProps && selectedKey !== derivedSelectedKey;
    var shouldChangeExpandKeys =
      'expandKeys' in nextProps && !arrayIsEqual(expandKeys, derivedExpandKeys);
    if (shouldChangeSelectedKey && shouldChangeExpandKeys) {
      return { derivedSelectedKey: selectedKey, derivedExpandKeys: expandKeys };
    } else if (shouldChangeSelectedKey && !shouldChangeExpandKeys) {
      return { derivedSelectedKey: selectedKey };
    } else if (!shouldChangeSelectedKey && shouldChangeExpandKeys) {
      return { derivedExpandKeys: expandKeys };
    }
    return null;
  };
  Menu.prototype.render = function() {
    var cn = componentName;
    var _a = this.props,
      className = _a.className,
      style = _a.style,
      mode = _a.mode,
      theme = _a.theme;
    return React.createElement(
      'ul',
      { className: classes(cn, '', [className, mode, theme]), style: style },
      this.renderChildren(),
    );
  };
  Menu.displayName = componentName;
  Menu.defaultProps = {
    mode: 'vertical',
    theme: 'light',
  };
  Menu.propTypes = {
    selectedKey: PropTypes.string,
    expandKeys: PropTypes.arrayOf(PropTypes.string),
    defaultSelectedKey: PropTypes.string,
    defaultExpandKeys: PropTypes.arrayOf(PropTypes.string),
    mode: PropTypes.oneOf(['vertical', 'horizontal']),
    theme: PropTypes.oneOf(['light', 'dark']),
    onSelectedChange: PropTypes.func,
    onExpandChange: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
  };
  return Menu;
})(React.Component);
export default Menu;
