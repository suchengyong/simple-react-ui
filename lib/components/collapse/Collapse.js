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
var componentName = 'Collapse';
var Collapse = /** @class */ (function(_super) {
  __extends(Collapse, _super);
  function Collapse(props) {
    var _this = _super.call(this, props) || this;
    _this.handleClickHeader = function(key, e) {
      var _a = _this.props,
        onChange = _a.onChange,
        accordion = _a.accordion;
      var derivedActiveKey = _this.state.derivedActiveKey;
      // only one open
      if (accordion) {
        _this.setState(
          {
            derivedActiveKey: derivedActiveKey.indexOf(key) > -1 ? [] : [key],
          },
          function() {
            if (onChange) {
              onChange(_this.state.derivedActiveKey, e);
            }
          },
        );
      } else {
        _this.setState(
          {
            derivedActiveKey:
              derivedActiveKey.indexOf(key) > -1
                ? derivedActiveKey.filter(function(item) {
                    return item !== key;
                  })
                : __spreadArrays([key], derivedActiveKey),
          },
          function() {
            if (onChange) {
              onChange(_this.state.derivedActiveKey, e);
            }
          },
        );
      }
    };
    _this.renderChildren = function() {
      var handleClickHeader = _this.handleClickHeader;
      var _a = _this.props,
        showArrow = _a.showArrow,
        children = _a.children;
      var derivedActiveKey = _this.state.derivedActiveKey;
      return React.Children.map(children, function(child) {
        if (!child) {
          return null;
        }
        var key = child.key;
        return React.cloneElement(child, {
          derivedActiveKey: derivedActiveKey,
          showArrow: showArrow,
          uniqueKey: key,
          onClick: handleClickHeader,
        });
      });
    };
    _this.state = {
      derivedActiveKey: props.defaultActiveKey || [],
    };
    return _this;
  }
  Collapse.getDerivedStateFromProps = function(nextProps, prevState) {
    var activeKey = nextProps.activeKey;
    var derivedActiveKey = prevState.derivedActiveKey;
    if (!('activeKey' in nextProps) || activeKey === derivedActiveKey) {
      return null;
    } else if (
      activeKey instanceof Array &&
      derivedActiveKey instanceof Array
    ) {
      var isEqual = arrayIsEqual(activeKey, derivedActiveKey);
      if (isEqual) {
        return null;
      } else {
        return { derivedActiveKey: activeKey };
      }
    }
    return { derivedActiveKey: activeKey };
  };
  Collapse.prototype.render = function() {
    var _a = this.props,
      className = _a.className,
      style = _a.style;
    return React.createElement(
      'div',
      { className: classes(componentName, '', [className]), style: style },
      this.renderChildren(),
    );
  };
  Collapse.displayName = componentName;
  Collapse.defaultProps = {
    accordion: false,
    showArrow: true,
  };
  Collapse.propTypes = {
    activeKey: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    defaultActiveKey: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    onChange: PropTypes.func,
    style: PropTypes.object,
    className: PropTypes.string,
  };
  return Collapse;
})(React.Component);
export default Collapse;
