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
import { classes } from '../utils';
//import './style';
import Scroll from '../scroll/Scroll';
var componentName = 'Table';
var VirtualTable = /** @class */ (function(_super) {
  __extends(VirtualTable, _super);
  function VirtualTable(props) {
    var _this = _super.call(this, props) || this;
    _this.changeRenderDataSource = function(y) {
      var _a = _this.props,
        dataSource = _a.dataSource,
        rowHeight = _a.rowHeight;
      var count = _this.state.count;
      var topHeight = Math.abs(y) - 10 * rowHeight;
      if (topHeight <= 0) {
        _this.setState({
          topHeight: 0,
          renderDataSource: dataSource.slice(0, count),
        });
      } else {
        var num = Math.ceil(topHeight / rowHeight);
        _this.setState({
          topHeight: topHeight,
          renderDataSource: dataSource.slice(num, num + count),
        });
      }
    };
    // 渲染表头
    _this.renderHead = function(renderDataSource, columns) {
      var cn = componentName;
      return React.createElement(
        React.Fragment,
        null,
        columns.map(function(col) {
          var key = col.key,
            width = col.width,
            title = col.title,
            headClassName = col.headClassName,
            headStyle = col.headStyle;
          return React.createElement(
            'div',
            {
              className: classes(cn, 'head-cell'),
              key: key,
              style: width
                ? { width: width + 'px', flexShrink: 0 }
                : { flexGrow: 1 },
            },
            React.createElement(
              'div',
              {
                className: classes(cn, 'head-cell-inner', [headClassName], {
                  sort: !!col.sort,
                }),
                style: headStyle,
              },
              title,
            ),
          );
        }),
      );
    };
    _this.renderBody = function(renderDataSource) {
      var columns = _this.props.columns;
      return renderDataSource.map(function(data, index) {
        return _this.renderRow(columns, data, index);
      });
    };
    // 渲染 body 行
    _this.renderRow = function(columns, data, index) {
      var cn = componentName;
      var rowHeight = _this.props.rowHeight;
      var key = data.key;
      return React.createElement(
        'div',
        {
          className: classes(cn, 'body-inner-row'),
          key: key,
          style: rowHeight ? { height: rowHeight + 'px' } : {},
        },
        _this.renderBodyRowCell(columns, data),
      );
    };
    // 渲染 row 中的列
    _this.renderBodyRowCell = function(columns, data) {
      var cn = componentName;
      return columns.map(function(col) {
        var key = col.key,
          width = col.width,
          className = col.className,
          style = col.style;
        return React.createElement(
          'div',
          {
            className: classes(cn, 'body-inner-row-cell'),
            key: key,
            style: width
              ? { width: width + 'px', flexShrink: 0 }
              : { flexGrow: 1 },
          },
          React.createElement(
            'div',
            {
              className: classes(cn, 'body-inner-row-cell-inner', [className]),
              style: style,
            },
            data[key],
          ),
        );
      });
    };
    var count = Math.ceil(props.height / props.rowHeight) + 20;
    _this.state = {
      renderDataSource: props.dataSource.slice(0, count),
      count: count,
      topHeight: 0,
    };
    return _this;
  }
  VirtualTable.prototype.render = function() {
    var cn = componentName;
    var _a = this.props,
      columns = _a.columns,
      height = _a.height,
      rowHeight = _a.rowHeight,
      dataSource = _a.dataSource;
    var _b = this.state,
      renderDataSource = _b.renderDataSource,
      topHeight = _b.topHeight,
      count = _b.count;
    var bottomHeight =
      rowHeight * dataSource.length - topHeight - rowHeight * count;
    return React.createElement(
      'div',
      { className: classes(cn, 'wrapper') },
      React.createElement(
        'div',
        { role: 'table' },
        React.createElement(
          'div',
          { className: classes(cn, 'head') },
          React.createElement(
            'div',
            { className: classes(cn, 'head-inner') },
            this.renderHead(renderDataSource, columns),
          ),
        ),
        React.createElement(
          'div',
          {
            className: classes(cn, 'body'),
            style: { height: height + 'px', overflowY: 'hidden' },
          },
          React.createElement(
            Scroll,
            { onScroll: this.changeRenderDataSource },
            React.createElement(
              'div',
              { className: classes(cn, 'body-inner') },
              React.createElement('div', {
                style: { height: topHeight + 'px' },
              }),
              this.renderBody(renderDataSource),
              React.createElement('div', {
                style: { height: (bottomHeight > 0 ? bottomHeight : 0) + 'px' },
              }),
            ),
          ),
        ),
      ),
    );
  };
  VirtualTable.displayName = componentName;
  return VirtualTable;
})(React.Component);
export default VirtualTable;
