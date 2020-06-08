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
var componentName = 'Tabs';
var Tabs = /** @class */ (function(_super) {
  __extends(Tabs, _super);
  function Tabs(props) {
    var _this = _super.call(this, props) || this;
    _this.keys = [];
    _this.getTitles = function() {
      var children = _this.props.children;
      var derivedActiveKey = _this.state.derivedActiveKey;
      return React.Children.map(children, function(child) {
        if (!child) {
          return null;
        }
        var key = child.key;
        _this.keys.push(key);
        return React.createElement(
          'li',
          {
            key: key,
            ref: function(node) {
              return (_this[key] = node);
            },
            onClick: function(e) {
              return _this.handleClickTitle(key, child.props.disabled, e);
            },
            className: classes(componentName, 'title', {
              active: key === derivedActiveKey,
              disabled: child.props.disabled,
            }),
          },
          child.props.title,
        );
      });
    };
    _this.getPanes = function() {
      var _a = _this.props,
        vertical = _a.vertical,
        children = _a.children;
      var derivedActiveKey = _this.state.derivedActiveKey;
      return React.Children.map(children, function(child) {
        if (!child) {
          return null;
        }
        _this.keys.push(child.key);
        var active = child.key === derivedActiveKey;
        if (vertical && !active) {
          return null;
        }
        return React.cloneElement(child, { active: active });
      });
    };
    _this.handleClickTitle = function(key, disabled, e) {
      if (disabled) {
        return;
      }
      if (key !== _this.state.derivedActiveKey) {
        _this.setState({
          derivedActiveKey: key,
        });
        if (_this.props.onChange) {
          _this.props.onChange(key);
        }
      }
    };
    _this.locateUnderline = function(key, node) {
      var _a = _this,
        head = _a.headRef,
        body = _a.bodyRef,
        role = _a.roleRef,
        keys = _a.keys;
      var vertical = _this.props.vertical;
      var _b = head.getBoundingClientRect(),
        headLeft = _b.left,
        headTop = _b.top;
      var _c = node.getBoundingClientRect(),
        left = _c.left,
        right = _c.right,
        top = _c.top,
        bottom = _c.bottom;
      if (vertical) {
        role.style.height = bottom - top + 'px';
        role.style.transform = 'translateY(' + (top - headTop) + 'px)';
      } else {
        // locate the underline
        role.style.width = right - left + 'px';
        role.style.transform = 'translateX(' + (left - headLeft) + 'px)';
        // switch the pane
        var index = keys.indexOf(key);
        body.style.transform = 'translateX(' + -100 * index + '%)';
      }
    };
    _this.saveHeadRef = function(node) {
      _this.headRef = node;
    };
    _this.saveRoleRef = function(node) {
      _this.roleRef = node;
    };
    _this.saveBodyRef = function(node) {
      _this.bodyRef = node;
    };
    _this.state = {
      derivedActiveKey: props.defaultActiveKey || '',
    };
    return _this;
  }
  Tabs.getDerivedStateFromProps = function(nextProps, prevState) {
    var activeKey = nextProps.activeKey;
    if ('activeKey' in nextProps && activeKey !== prevState.derivedActiveKey) {
      return { derivedActiveKey: activeKey };
    }
    return null;
  };
  Tabs.prototype.componentDidMount = function() {
    // set the first key as default
    if (!('defaultActiveKey' in this.props) && !('activeKey' in this.props)) {
      this.setState({
        derivedActiveKey: this.keys[0],
      });
    } else {
      var derivedActiveKey = this.state.derivedActiveKey;
      this.locateUnderline(derivedActiveKey, this[derivedActiveKey]);
    }
  };
  Tabs.prototype.componentDidUpdate = function(prevProps, prevState) {
    var derivedActiveKey = this.state.derivedActiveKey;
    if (derivedActiveKey !== prevState.derivedActiveKey) {
      this.locateUnderline(derivedActiveKey, this[derivedActiveKey]);
    }
  };
  Tabs.prototype.render = function() {
    var cn = componentName;
    var _a = this.props,
      vertical = _a.vertical,
      className = _a.className,
      style = _a.style;
    return React.createElement(
      'div',
      {
        className: classes(cn, '', [className], { vertical: vertical }),
        style: style,
      },
      React.createElement(
        'ul',
        {
          className: classes(cn, 'head', { vertical: vertical }),
          ref: this.saveHeadRef,
        },
        this.getTitles(),
        React.createElement('li', {
          className: classes(cn, 'role', {
            vertical: vertical,
            horizontal: !vertical,
          }),
          ref: this.saveRoleRef,
        }),
      ),
      React.createElement(
        'ul',
        {
          className: classes(cn, 'body', { vertical: vertical }),
          ref: this.saveBodyRef,
        },
        this.getPanes(),
      ),
    );
  };
  Tabs.displayName = componentName;
  Tabs.propTypes = {
    activeKey: PropTypes.string,
    defaultActiveKey: PropTypes.string,
    onChange: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
    vertical: PropTypes.bool,
  };
  return Tabs;
})(React.Component);
export default Tabs;
