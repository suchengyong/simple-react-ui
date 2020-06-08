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
var componentName = 'Waterfall';
var Waterfall = /** @class */ (function(_super) {
  __extends(Waterfall, _super);
  function Waterfall() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.saveWrapperEl = function(node) {
      _this.wrapperEl = node;
    };
    // 计算列数和间隙
    _this.calculateColCountAndGutter = function() {
      var width = _this.props.width;
      var _a = _this.wrapperEl.getBoundingClientRect(),
        left = _a.left,
        right = _a.right;
      var wrapperWidth = right - left;
      var colCount = Math.floor(wrapperWidth / width);
      var gutter = (wrapperWidth - width * colCount) / (colCount - 1 || 1);
      _this.setState({
        colCount: colCount,
        gutter: gutter,
      });
    };
    // 计算单个元素的高度
    _this.calculateNodeHeight = function(node) {
      var _a = node.getBoundingClientRect(),
        top = _a.top,
        bottom = _a.bottom;
      return bottom - top;
    };
    return _this;
  }
  Waterfall.prototype.componentDidMount = function() {
    var _this = this;
    var nodeList = [];
    this.wrapperEl.childNodes.forEach(function(node) {
      if (node.nodeType === 1) {
        nodeList.push(node);
        console.log(_this.calculateNodeHeight(node));
      }
    });
  };
  Waterfall.prototype.render = function() {
    var cn = componentName;
    var children = this.props.children;
    return React.createElement(
      'div',
      { className: classes(cn, 'container'), ref: this.saveWrapperEl },
      children,
    );
  };
  Waterfall.displayName = componentName;
  Waterfall.defaultProps = {
    width: 200,
  };
  Waterfall.propTypes = {
    width: PropTypes.number,
  };
  return Waterfall;
})(React.Component);
export default Waterfall;
