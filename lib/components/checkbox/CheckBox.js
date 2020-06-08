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
var componentName = 'CheckBox';
var CheckBox = /** @class */ (function(_super) {
  __extends(CheckBox, _super);
  function CheckBox(props) {
    var _this = _super.call(this, props) || this;
    _this.handleClick = function(e) {
      var _a = _this.props,
        disabled = _a.disabled,
        onChange = _a.onChange;
      var derivedChecked = _this.state.derivedChecked;
      if (disabled) {
        return;
      }
      _this.setState({ derivedChecked: !derivedChecked });
      if (onChange) {
        onChange(!derivedChecked, e);
      }
    };
    _this.state = {
      derivedChecked: props.defaultChecked || false,
    };
    return _this;
  }
  CheckBox.getDerivedStateFromProps = function(nextProps, prevState) {
    if ('checked' in nextProps) {
      return { derivedChecked: nextProps.checked };
    }
    return null;
  };
  CheckBox.prototype.render = function() {
    var cn = componentName;
    var _a = this.props,
      disabled = _a.disabled,
      indeterminate = _a.indeterminate,
      children = _a.children;
    var derivedChecked = this.state.derivedChecked;
    return React.createElement(
      'div',
      { className: classes(cn, ''), onClick: this.handleClick },
      React.createElement('div', {
        className: classes(cn, 'selection', {
          disabled: disabled,
          indeterminate: indeterminate,
          checked: derivedChecked,
        }),
      }),
      children,
    );
  };
  CheckBox.displayName = componentName;
  CheckBox.propTypes = {
    checked: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    disabled: PropTypes.bool,
    indeterminate: PropTypes.bool,
    onChange: PropTypes.func,
  };
  return CheckBox;
})(React.Component);
export default CheckBox;
