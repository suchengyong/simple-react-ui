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
import { classes } from '../utils';
import CheckBox from './CheckBox';
var componentName = 'CheckBoxGroup';
var CheckBoxGroup = /** @class */ (function(_super) {
  __extends(CheckBoxGroup, _super);
  function CheckBoxGroup(props) {
    var _this = _super.call(this, props) || this;
    _this.handleChange = function(key) {
      var onChange = _this.props.onChange;
      var derivedValue = _this.state.derivedValue;
      var newValue =
        derivedValue.indexOf(key) > -1
          ? derivedValue.filter(function(item) {
              return item !== key;
            })
          : __spreadArrays([key], derivedValue);
      _this.setState({
        derivedValue: newValue,
      });
      if (onChange) {
        onChange(newValue);
      }
    };
    _this.selectAll = function(isAll) {
      var _a = _this.props,
        options = _a.options,
        onChange = _a.onChange;
      var newValue = isAll
        ? options.reduce(function(prev, current) {
            return __spreadArrays([current.value], prev);
          }, [])
        : [];
      _this.setState({
        derivedValue: newValue,
      });
      if (onChange) {
        onChange(newValue);
      }
    };
    _this.getStatus = function() {
      var options = _this.props.options;
      var derivedValue = _this.state.derivedValue;
      if (derivedValue.length > 0 && derivedValue.length < options.length) {
        return 'indeterminate';
      } else if (derivedValue.length === options.length) {
        return 'all';
      } else {
        return 'none';
      }
    };
    _this.handleAll = function() {
      if (_this.getStatus() === 'all') {
        _this.selectAll(false);
      } else {
        _this.selectAll(true);
      }
    };
    _this.state = {
      derivedValue: props.defaultValue || [],
    };
    return _this;
  }
  CheckBoxGroup.getDerivedStateFromProps = function(nextProps, prevState) {
    if ('value' in nextProps) {
      return { derivedValue: nextProps.value };
    }
    return null;
  };
  CheckBoxGroup.prototype.render = function() {
    var _this = this;
    var cn = componentName;
    var _a = this.props,
      options = _a.options,
      title = _a.title,
      className = _a.className,
      style = _a.style;
    var derivedValue = this.state.derivedValue;
    return React.createElement(
      'div',
      { className: classes(cn, '', [className]), style: style },
      React.createElement(
        CheckBox,
        {
          indeterminate: this.getStatus() === 'indeterminate',
          checked: this.getStatus() === 'all',
          onChange: this.handleAll,
        },
        title,
      ),
      options.map(function(option) {
        return React.createElement(
          CheckBox,
          {
            key: option.value,
            checked: derivedValue.indexOf(option.value) > -1,
            disabled: option.disabled === true,
            onChange: function() {
              return _this.handleChange(option.value);
            },
          },
          option.label,
        );
      }),
    );
  };
  CheckBoxGroup.displayName = componentName;
  CheckBoxGroup.defaultProps = {
    title: 'All',
  };
  CheckBoxGroup.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
    defaultValue: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    value: PropTypes.arrayOf(PropTypes.string),
    onChange: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
  };
  return CheckBoxGroup;
})(React.Component);
export default CheckBoxGroup;
