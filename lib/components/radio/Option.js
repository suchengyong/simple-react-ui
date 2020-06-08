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
var componentName = 'Option';
var Option = /** @class */ (function(_super) {
  __extends(Option, _super);
  function Option() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.handleClick = function(e) {
      var _a = _this.props,
        value = _a.value,
        onClick = _a.onClick,
        disabled = _a.disabled;
      if (disabled || !onClick) {
        return;
      }
      onClick(value, e);
    };
    return _this;
  }
  Option.prototype.render = function() {
    var cn = componentName;
    var _a = this.props,
      radioStyle = _a.radioStyle,
      disabled = _a.disabled,
      vertical = _a.vertical,
      value = _a.value,
      checkedValue = _a.checkedValue,
      children = _a.children;
    var optionClassName = classes(cn, '', [radioStyle + '-style'], {
      checked: value === checkedValue,
      disabled: disabled,
      vertical: vertical,
    });
    return radioStyle === 'radio'
      ? React.createElement(
          'label',
          { className: optionClassName, onClick: this.handleClick },
          React.createElement('span', { className: 'label-dot' }),
          React.createElement('div', { className: 'label-text' }, children),
        )
      : React.createElement(
          'label',
          { className: optionClassName, onClick: this.handleClick },
          React.createElement('div', { className: 'label-text' }, children),
        );
  };
  Option.displayName = componentName;
  Option.defaultProps = {
    disabled: false,
    vertical: false,
  };
  Option.propTypes = {
    value: PropTypes.any.isRequired,
    checkedValue: PropTypes.any,
    onClick: PropTypes.func,
    radioStyle: PropTypes.oneOf(['radio', 'button']),
    disabled: PropTypes.bool,
    vertical: PropTypes.bool,
  };
  return Option;
})(React.Component);
export default Option;
