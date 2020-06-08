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
import * as ReactDOM from 'react-dom';
import * as PropTypes from 'prop-types';
import { calculateNodeHeight, classes } from '../utils';
var componentName = 'Textarea';
var Textarea = /** @class */ (function(_super) {
  __extends(Textarea, _super);
  function Textarea(props) {
    var _this = _super.call(this, props) || this;
    _this.handleChange = function(e) {
      var _a = _this.props,
        onChange = _a.onChange,
        autosize = _a.autosize;
      if (onChange) {
        onChange(e);
      }
      _this.setState({
        derivedValue: e.target.value,
      });
      if (!autosize) {
        return;
      }
      var hiddenHeight = calculateNodeHeight(_this.textareaRef);
      if (hiddenHeight > _this.originHeight) {
        _this.textareaRef.style.height = hiddenHeight + 'px';
      }
    };
    _this.handleKeyDown = function(e) {
      var onPressEnter = _this.props.onPressEnter;
      if (e.keyCode === 13 && onPressEnter) {
        onPressEnter(e);
      }
    };
    _this.getTextareaRef = function(textarea) {
      _this.textareaRef = textarea;
    };
    _this.focus = function() {
      _this.textareaRef.focus();
    };
    _this.blur = function() {
      _this.textareaRef.blur();
    };
    _this.state = {
      derivedValue: props.defaultValue || '',
    };
    return _this;
  }
  Textarea.getDerivedStateFromProps = function(nextProps, prevState) {
    var value = nextProps.value;
    var derivedValue = prevState.derivedValue;
    if ('value' in nextProps && derivedValue !== value) {
      return { derivedValue: value };
    }
    return null;
  };
  Textarea.prototype.componentDidMount = function() {
    var el = ReactDOM.findDOMNode(this);
    var _a = el.getBoundingClientRect(),
      top = _a.top,
      bottom = _a.bottom;
    this.originHeight = bottom - top;
  };
  Textarea.prototype.render = function() {
    var cn = componentName;
    var _a = this.props,
      style = _a.style,
      autosize = _a.autosize,
      placeholder = _a.placeholder,
      size = _a.size,
      className = _a.className;
    var derivedValue = this.state.derivedValue;
    var textareaClassName = classes(cn, '', [className], {
      autosize: autosize,
    });
    return React.createElement('textarea', {
      value: derivedValue,
      onChange: this.handleChange,
      className: textareaClassName,
      style: style,
      ref: this.getTextareaRef,
      placeholder: placeholder,
      cols: size ? Number(size.cols) : undefined,
      rows: size ? Number(size.rows) : undefined,
    });
  };
  Textarea.displayName = componentName;
  Textarea.defaultProps = {
    autosize: false,
    placeholder: '',
  };
  Textarea.propTypes = {
    size: PropTypes.object,
    autosize: PropTypes.bool,
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    onPressEnter: PropTypes.func,
    onChange: PropTypes.func,
    style: PropTypes.object,
    placeholder: PropTypes.string,
  };
  return Textarea;
})(React.Component);
export default Textarea;
