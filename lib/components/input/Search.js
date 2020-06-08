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
import Input from './Input';
var componentName = 'Search';
var Search = /** @class */ (function(_super) {
  __extends(Search, _super);
  function Search(props) {
    var _this = _super.call(this, props) || this;
    _this.handleChange = function(e) {
      _this.setState({
        derivedValue: e.target.value,
      });
      var onChange = _this.props.onChange;
      if (onChange) {
        onChange(e);
      }
    };
    _this.handleSearch = function() {
      var onSearch = _this.props.onSearch;
      if (onSearch) {
        onSearch(_this.state.derivedValue);
      }
    };
    _this.saveInputInstance = function(instance) {
      _this.inputInstance = instance;
    };
    _this.focus = function() {
      _this.inputInstance.focus();
    };
    _this.blur = function() {
      _this.inputInstance.blur();
    };
    _this.state = {
      derivedValue: props.defaultValue || '',
    };
    return _this;
  }
  Search.getDerivedStateFromProps = function(nextProps, prevState) {
    var value = nextProps.value;
    var derivedValue = prevState.derivedValue;
    if ('value' in nextProps && value !== derivedValue) {
      return { derivedValue: value };
    }
    return null;
  };
  Search.prototype.render = function() {
    var cn = componentName;
    var _a = this.props,
      enterButton = _a.enterButton,
      placeholder = _a.placeholder,
      className = _a.className,
      style = _a.style;
    var derivedValue = this.state.derivedValue;
    return React.createElement(Input, {
      ref: this.saveInputInstance,
      value: derivedValue,
      className: classes(cn, ['search', className], {
        'enter-button': !!enterButton,
      }),
      style: style,
      onChange: this.handleChange,
      onPressEnter: this.handleSearch,
      suffix:
        (enterButton === false &&
          React.createElement(Icon, {
            name: 'search',
            style: { cursor: 'pointer' },
            size: 18,
            onClick: this.handleSearch,
          })) ||
        null,
      addonAfter: enterButton
        ? React.createElement(
            'div',
            {
              className: classes(cn, 'enter-button'),
              onClick: this.handleSearch,
            },
            enterButton === true
              ? React.createElement(Icon, { name: 'search', size: 20 })
              : enterButton,
          )
        : null,
      placeholder: placeholder,
    });
  };
  Search.displayName = componentName;
  Search.defaultProps = {
    placeholder: '',
    enterButton: false,
  };
  Search.propTypes = {
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    placeholder: PropTypes.string,
    enterButton: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
      PropTypes.element,
    ]),
    onSearch: PropTypes.func,
    style: PropTypes.object,
    className: PropTypes.string,
  };
  return Search;
})(React.Component);
export default Search;
