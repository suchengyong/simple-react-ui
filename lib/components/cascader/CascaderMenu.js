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
var componentName = 'CascaderMenu';
var CascaderMenu = /** @class */ (function(_super) {
  __extends(CascaderMenu, _super);
  function CascaderMenu(props) {
    var _this = _super.call(this, props) || this;
    _this.handleClickItem = function(option) {
      if (option.disabled) {
        return;
      }
      var _a = _this.props,
        level = _a.level,
        handleChangeValue = _a.handleChangeValue;
      if (
        !_this.state.currentOption ||
        option.value !== _this.state.currentOption.value
      ) {
        _this.setState({
          currentOption: option,
        });
      }
      handleChangeValue(option, level);
    };
    _this.state = {
      currentOption: null,
    };
    return _this;
  }
  CascaderMenu.getDerivedStateFromProps = function(nextProps, prevState) {
    // 未选中任何一项
    if (!nextProps.valueArr) {
      return { currentOption: null };
    }
    // 被截掉
    if (
      prevState.currentOption &&
      prevState.currentOption.value &&
      nextProps.valueArr.indexOf(prevState.currentOption.value) === -1
    ) {
      return { currentOption: null };
    }
    return null;
  };
  CascaderMenu.prototype.render = function() {
    var _this = this;
    var cn = componentName;
    var _a = this.props,
      options = _a.options,
      level = _a.level,
      handleChangeValue = _a.handleChangeValue,
      valueArr = _a.valueArr,
      itemClassName = _a.itemClassName,
      itemStyle = _a.itemStyle;
    var currentOption = this.state.currentOption;
    return React.createElement(
      React.Fragment,
      null,
      React.createElement(
        'ul',
        { className: classes(cn, '') },
        options.map(function(option) {
          return React.createElement(
            'li',
            {
              className: classes(cn, 'item', [itemClassName], {
                selected: valueArr && valueArr.indexOf(option.value) > -1,
                'has-children': option.children && option.children.length,
                disabled: option.disabled,
              }),
              style: itemStyle,
              key: option.value,
              onClick: function() {
                return _this.handleClickItem(option);
              },
            },
            option.label,
            option.children &&
              option.children.length &&
              React.createElement(
                'span',
                { className: classes(cn, 'item-icon-wrapper') },
                React.createElement(Icon, { name: 'arrow', size: 8 }),
              ),
          );
        }),
      ),
      currentOption &&
        currentOption.children &&
        currentOption.children.length &&
        React.createElement(CascaderMenu, {
          options: currentOption.children,
          level: level + 1,
          handleChangeValue: handleChangeValue,
          valueArr: valueArr,
          itemClassName: itemClassName,
          itemStyle: itemStyle,
        }),
    );
  };
  CascaderMenu.displayName = componentName;
  CascaderMenu.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object),
    level: PropTypes.number,
    handleChangeValue: PropTypes.func,
    valueArr: PropTypes.arrayOf(PropTypes.string),
    itemClassName: PropTypes.string,
    itemStyle: PropTypes.object,
  };
  return CascaderMenu;
})(React.Component);
export default CascaderMenu;
