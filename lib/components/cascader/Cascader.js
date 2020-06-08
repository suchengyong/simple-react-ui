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
import CascaderMenu from './CascaderMenu';
import Icon from '../icon/Icon';
import Unfold from '../transition/Unfold';
var componentName = 'Cascader';
var Cascader = /** @class */ (function(_super) {
  __extends(Cascader, _super);
  function Cascader(props) {
    var _this = _super.call(this, props) || this;
    // 监听 document，点击别处关闭
    _this.handleClickDocument = function(e) {
      var target = e.target;
      var menuVisible = _this.state.menuVisible;
      if (!_this.cascaderEl.contains(target) && menuVisible) {
        _this.setState({
          menuVisible: false,
        });
      }
    };
    _this.saveCascaderEl = function(node) {
      _this.cascaderEl = node;
    };
    _this.handleClickInput = function() {
      _this.setState({
        menuVisible: !_this.state.menuVisible,
      });
    };
    _this.handleChangeValue = function(option, level) {
      // 最后一级
      if (!option.children) {
        _this.handleClickLastLevel(option, level);
        // 中间层级
      } else {
        _this.handleClickMidLevel(option, level);
      }
    };
    // 监听点击最后一层，点击后需要关闭菜单，若 valueArr 改变，需更新输入框显示的值
    _this.handleClickLastLevel = function(option, level) {
      var onChange = _this.props.onChange;
      var valueArr = _this.state.valueArr || [];
      var selectedOptions = _this.state.selectedOptions || [];
      // 相同，未改变，关闭菜单
      if (valueArr[level] === option.value) {
        _this.setState({
          menuVisible: false,
        });
        // 不同，更改后关闭菜单
      } else {
        var valueArrCopy = JSON.parse(JSON.stringify(valueArr));
        var selectedOptionsCopy = JSON.parse(JSON.stringify(selectedOptions));
        valueArrCopy.splice(level, 1, option.value);
        selectedOptionsCopy.splice(level, 1, option);
        _this.setState({
          valueArr: valueArrCopy,
          selectedOptions: selectedOptionsCopy,
          inputValueFromLabel: _this.getLabelString(selectedOptionsCopy),
          menuVisible: false,
        });
        if (onChange) {
          onChange(valueArrCopy, selectedOptionsCopy);
        }
      }
    };
    // 监听点击中间层，若改变，只在 changeOnSelect 为真时更新输入框显示的值
    _this.handleClickMidLevel = function(option, level) {
      var _a = _this.props,
        changeOnSelect = _a.changeOnSelect,
        onSelect = _a.onSelect;
      var valueArr = _this.state.valueArr || [];
      var selectedOptions = _this.state.selectedOptions || [];
      // 相同，截掉后面的
      if (valueArr[level] === option.value) {
        // 选中即改变时,更新输入框显示的值
        if (changeOnSelect) {
          _this.setState({
            valueArr: valueArr.slice(0, level + 1),
            selectedOptions: selectedOptions.slice(0, level + 1),
            inputValueFromLabel: _this.getLabelString(
              selectedOptions.slice(0, level + 1),
            ),
          });
        } else {
          _this.setState({
            valueArr: valueArr.slice(0, level + 1),
            selectedOptions: selectedOptions.slice(0, level + 1),
          });
        }
        // 始终调用回调
        if (onSelect) {
          onSelect(
            valueArr.slice(0, level + 1),
            selectedOptions.slice(0, level + 1),
          );
        }
        // 不同，替换并截掉后面的
      } else {
        var valueArrCopy = JSON.parse(JSON.stringify(valueArr));
        var selectedOptionsCopy = JSON.parse(JSON.stringify(selectedOptions));
        valueArrCopy.splice(level, 1, option.value);
        selectedOptionsCopy.splice(level, 1, option);
        // 选中即改变时,更新输入框显示的值
        if (changeOnSelect) {
          _this.setState({
            valueArr: valueArrCopy.slice(0, level + 1),
            selectedOptions: selectedOptionsCopy.slice(0, level + 1),
            inputValueFromLabel: _this.getLabelString(
              selectedOptionsCopy.slice(0, level + 1),
            ),
          });
        } else {
          _this.setState({
            valueArr: valueArrCopy.slice(0, level + 1),
            selectedOptions: selectedOptionsCopy.slice(0, level + 1),
          });
        }
        // 始终调用回调
        if (onSelect) {
          onSelect(
            valueArrCopy.slice(0, level + 1),
            selectedOptionsCopy.slice(0, level + 1),
          );
        }
      }
    };
    _this.getLabelString = function(selectedOptions) {
      var prev = [];
      return (
        selectedOptions
          .reduce(function(base, current) {
            base.push(current.label);
            return base;
          }, prev)
          .join(' / ') || ''
      );
    };
    _this.handleOnClear = function() {
      _this.setState({
        valueArr: [],
        selectedOptions: [],
        inputValueFromLabel: '',
        menuVisible: false,
      });
      if (_this.props.onChange) {
        _this.props.onChange([], []);
      }
    };
    _this.state = {
      valueArr: [],
      selectedOptions: [],
      inputValueFromLabel: '',
      menuStyle: {
        top: '',
      },
      menuVisible: false,
    };
    return _this;
  }
  Cascader.prototype.componentDidMount = function() {
    var _a = this.cascaderEl.getBoundingClientRect(),
      bottom = _a.bottom,
      top = _a.top;
    this.setState({
      menuStyle: {
        top: bottom - top + 4 + 'px',
      },
    });
    document.addEventListener('click', this.handleClickDocument, true);
  };
  Cascader.prototype.componentWillUnmount = function() {
    document.removeEventListener('click', this.handleClickDocument, true);
  };
  Cascader.prototype.render = function() {
    var cn = componentName;
    var _a = this.props,
      options = _a.options,
      placeholder = _a.placeholder,
      itemClassName = _a.itemClassName,
      itemStyle = _a.itemStyle,
      className = _a.className,
      style = _a.style;
    var _b = this.state,
      valueArr = _b.valueArr,
      menuVisible = _b.menuVisible,
      menuStyle = _b.menuStyle,
      inputValueFromLabel = _b.inputValueFromLabel;
    return React.createElement(
      'div',
      {
        className: classes(cn, '', {
          active: menuVisible,
        }),
        ref: this.saveCascaderEl,
      },
      React.createElement(
        'span',
        { className: classes(cn, 'input-wrapper') },
        placeholder &&
          !inputValueFromLabel &&
          React.createElement(
            'span',
            { className: classes(cn, 'placeholder') },
            placeholder,
          ),
        React.createElement('input', {
          type: 'text',
          className: classes(cn, 'input', [className]),
          style: style,
          readOnly: true,
          onClick: this.handleClickInput,
          value: inputValueFromLabel,
        }),
        React.createElement(
          'span',
          { className: classes(cn, 'icon-wrapper', ['arrow']) },
          React.createElement(Icon, { name: 'arrow', size: 8 }),
        ),
        inputValueFromLabel &&
          React.createElement(
            'span',
            {
              className: classes(cn, 'icon-wrapper', ['close']),
              onClick: this.handleOnClear,
            },
            React.createElement(Icon, { name: 'close', size: 10 }),
          ),
      ),
      options &&
        options.length &&
        React.createElement(
          Unfold,
          { visible: menuVisible, vertical: true },
          React.createElement(
            'div',
            { className: classes(cn, 'menu-container'), style: menuStyle },
            React.createElement(CascaderMenu, {
              options: options,
              level: 0,
              handleChangeValue: this.handleChangeValue,
              valueArr: valueArr,
              itemClassName: itemClassName,
              itemStyle: itemStyle,
            }),
          ),
        ),
    );
  };
  Cascader.displayName = componentName;
  Cascader.defaultProps = {
    changeOnSelect: false,
  };
  Cascader.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
    placeholder: PropTypes.string,
    itemStyle: PropTypes.object,
    itemClassName: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
    onChange: PropTypes.func,
    onSelect: PropTypes.func,
    changeOnSelect: PropTypes.bool,
  };
  return Cascader;
})(React.Component);
export default Cascader;
