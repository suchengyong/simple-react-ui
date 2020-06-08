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
var componentName = 'Input';
var Input = /** @class */ (function(_super) {
  __extends(Input, _super);
  function Input(props) {
    var _this = _super.call(this, props) || this;
    _this.handleChange = function(e) {
      var onChange = _this.props.onChange;
      if (onChange) {
        onChange(e);
      }
      _this.setState({
        derivedValue: e.target.value,
      });
    };
    _this.handleKeyDown = function(e) {
      var _a = _this.props,
        onPressEnter = _a.onPressEnter,
        onKeyDown = _a.onKeyDown;
      if (onPressEnter && e.keyCode === 13) {
        onPressEnter(e);
      }
      if (onKeyDown) {
        onKeyDown(e);
      }
    };
    _this.saveInputRef = function(node) {
      _this.inputRef = node;
    };
    _this.focus = function() {
      _this.inputRef.focus();
    };
    _this.blur = function() {
      _this.inputRef.blur();
    };
    _this.state = {
      derivedValue: props.defaultValue || '',
    };
    return _this;
  }
  Input.getDerivedStateFromProps = function(nextProps, prevState) {
    var value = nextProps.value;
    var derivedValue = prevState.derivedValue;
    if ('value' in nextProps && value !== derivedValue) {
      return { derivedValue: value };
    }
    return null;
  };
  Input.prototype.render = function() {
    var cn = componentName;
    var _a = this.props,
      placeholder = _a.placeholder,
      style = _a.style,
      className = _a.className,
      addonBefore = _a.addonBefore,
      addonAfter = _a.addonAfter,
      prefix = _a.prefix,
      suffix = _a.suffix,
      disabled = _a.disabled,
      error = _a.error,
      onFocus = _a.onFocus,
      onBlur = _a.onBlur,
      readonly = _a.readonly;
    var derivedValue = this.state.derivedValue;
    var labelClassName = classes(cn, 'wrapper', [className], {
      disabled: disabled,
      error: error,
      prefix: !!prefix,
      suffix: !!suffix,
      'addon-before': !!addonBefore,
      'addon-after': !!addonAfter,
    });
    return React.createElement(
      'label',
      { className: labelClassName },
      addonBefore &&
        React.createElement(
          'div',
          { className: 'addon-before-wrapper' },
          typeof addonBefore === 'string'
            ? React.createElement(
                'span',
                { className: 'before-string' },
                addonBefore,
              )
            : addonBefore,
        ),
      prefix &&
        React.createElement(
          'span',
          { className: 'prefix-wrapper' },
          typeof prefix === 'string'
            ? React.createElement(
                'span',
                { className: 'prefix-string' },
                prefix,
              )
            : prefix,
        ),
      React.createElement('input', {
        className: 'xue-input',
        type: 'text',
        placeholder: placeholder || '',
        onChange: this.handleChange,
        onKeyDown: this.handleKeyDown,
        value: derivedValue,
        onFocus: onFocus,
        onBlur: onBlur,
        style: style,
        disabled: disabled,
        readOnly: readonly,
        ref: this.saveInputRef,
      }),
      suffix &&
        React.createElement(
          'span',
          { className: 'suffix-wrapper' },
          typeof suffix === 'string'
            ? React.createElement(
                'span',
                { className: 'suffix-string' },
                suffix,
              )
            : suffix,
        ),
      addonAfter &&
        React.createElement(
          'div',
          { className: 'addon-after-wrapper' },
          typeof addonAfter === 'string'
            ? React.createElement(
                'span',
                { className: 'after-string' },
                addonAfter,
              )
            : addonAfter,
        ),
    );
  };
  Input.displayName = componentName;
  Input.defaultProps = {
    disabled: false,
    error: false,
    readonly: false,
  };
  Input.propTypes = {
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    placeholder: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
    onChange: PropTypes.func,
    onKeyDown: PropTypes.func,
    onPressEnter: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    addonBefore: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    addonAfter: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    prefix: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    suffix: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    readonly: PropTypes.bool,
  };
  return Input;
})(React.Component);
export default Input;
