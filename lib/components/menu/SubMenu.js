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
import Unfold from '../transition/Unfold';
var componentName = 'SubMenu';
var SubMenu = /** @class */ (function(_super) {
  __extends(SubMenu, _super);
  function SubMenu() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.state = {
      childrenVisible: true,
    };
    _this.childrenKeys = [];
    _this.renderChildren = function() {
      var _a = _this.props,
        selectedKey = _a.selectedKey,
        expandKeys = _a.expandKeys,
        handleSelectedKey = _a.handleSelectedKey,
        handleExpandKeys = _a.handleExpandKeys,
        mode = _a.mode,
        theme = _a.theme,
        children = _a.children;
      return React.Children.map(children, function(child, index) {
        var uniqueKey = _this.getUniqueKeyFromChild(child, index);
        _this.childrenKeys.push(uniqueKey);
        return React.cloneElement(child, {
          uniqueKey: uniqueKey,
          selectedKey: selectedKey,
          expandKeys: expandKeys,
          handleSelectedKey: handleSelectedKey,
          handleExpandKeys: handleExpandKeys,
          mode: mode,
          theme: theme,
        });
      });
    };
    _this.getUniqueKeyFromChild = function(child, index) {
      return child.key || 'item-' + index;
    };
    _this.handleClick = function(e) {
      var _a = _this.props,
        uniqueKey = _a.uniqueKey,
        handleExpandKeys = _a.handleExpandKeys,
        itemGroup = _a.itemGroup;
      if (!itemGroup) {
        handleExpandKeys(uniqueKey);
      }
    };
    return _this;
  }
  SubMenu.prototype.render = function() {
    var cn = componentName;
    var _a = this.props,
      uniqueKey = _a.uniqueKey,
      selectedKey = _a.selectedKey,
      expandKeys = _a.expandKeys,
      title = _a.title,
      className = _a.className,
      style = _a.style,
      theme = _a.theme,
      mode = _a.mode,
      showArrow = _a.showArrow,
      itemGroup = _a.itemGroup;
    var childrenKeys = this.childrenKeys;
    return React.createElement(
      'li',
      {
        className: classes(cn, '', [theme], {
          active: expandKeys.indexOf(uniqueKey) > -1,
          'item-group': itemGroup,
        }),
      },
      React.createElement(
        'div',
        {
          className: classes(cn, 'title', [className, mode], {
            active: expandKeys.indexOf(uniqueKey) > -1,
            'child-selected':
              childrenKeys && childrenKeys.indexOf(selectedKey) > -1,
          }),
          style: style,
          onClick: this.handleClick,
        },
        title,
        showArrow &&
          React.createElement(
            'span',
            { className: classes(cn, 'title-icon-wrapper') },
            React.createElement(Icon, { name: 'arrow', size: 8 }),
          ),
      ),
      React.createElement(
        Unfold,
        {
          vertical: true,
          visible: expandKeys.indexOf(uniqueKey) > -1 || itemGroup,
        },
        React.createElement(
          'ul',
          { className: classes(cn, 'children-wrapper') },
          this.renderChildren(),
        ),
      ),
    );
  };
  SubMenu.displayName = componentName;
  SubMenu.defaultProps = {
    showArrow: true,
    itemGroup: false,
  };
  SubMenu.propTypes = {
    uniqueKey: PropTypes.string,
    selectedKey: PropTypes.string,
    expandKeys: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    mode: PropTypes.oneOf(['vertical', 'horizontal']),
    theme: PropTypes.oneOf(['light', 'dark']),
    onSelectedChange: PropTypes.func,
    onExpandChange: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
    showArrow: PropTypes.bool,
    itemGroup: PropTypes.bool,
  };
  return SubMenu;
})(React.Component);
export default SubMenu;
