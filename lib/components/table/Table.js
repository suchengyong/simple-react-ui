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
var __spreadArrays =
  (this && this.__spreadArrays) ||
  function() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++)
      s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
    return r;
  };
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { classes, arrayIsEqual } from '../utils';
import Icon from '../icon/Icon';
import Pager from '../pager/Pager';
//import './style';
import Spin from '../spin/Spin';
var componentName = 'Table';
var Table = /** @class */ (function(_super) {
  __extends(Table, _super);
  function Table(props) {
    var _this = _super.call(this, props) || this;
    _this.maxScrollLeft = 0;
    _this.saveBodyEl = function(node) {
      _this.bodyEl = node;
    };
    _this.saveHeadEl = function(node) {
      _this.headEl = node;
    };
    _this.saveLeftFixedBodyEl = function(node) {
      _this.leftFixedBodyEl = node;
    };
    _this.saveRightFixedBodyEl = function(node) {
      _this.rightFixedBodyEl = node;
    };
    _this.saveTableEl = function(node) {
      _this.tableEl = node;
    };
    _this.saveWrapperEl = function(node) {
      _this.wrapperEl = node;
    };
    // 固定列时获取横向最大滚动宽度
    _this.getMaxScrollLeft = function() {
      var _a = _this.wrapperEl.getBoundingClientRect(),
        left = _a.left,
        right = _a.right;
      return _this.tableEl.scrollWidth - (right - left);
    };
    // 渲染表头
    _this.renderHead = function(renderDataSource, columns, selectCol) {
      var cn = componentName;
      var _a = _this.props,
        size = _a.size,
        border = _a.border;
      return React.createElement(
        React.Fragment,
        null,
        selectCol &&
          React.createElement(
            'div',
            {
              className: classes(cn, 'head-cell', ['check-box'], {
                border: border,
              }),
              style: { width: '60px', flexShrink: 0 },
            },
            React.createElement(
              'div',
              { className: classes(cn, 'head-cell-inner', [size]) },
              React.createElement('div', {
                className: classes(cn, 'selection', [
                  _this.getSelectionClassName(renderDataSource),
                ]),
                onClick: function() {
                  return _this.handleClickHeadSelection(renderDataSource);
                },
              }),
            ),
          ),
        columns.map(function(col) {
          var key = col.key,
            width = col.width,
            title = col.title,
            headClassName = col.headClassName,
            headStyle = col.headStyle;
          return React.createElement(
            'div',
            {
              className: classes(cn, 'head-cell', { border: border }),
              key: key,
              style: width
                ? { width: width + 'px', flexShrink: 0 }
                : { flexGrow: 1 },
            },
            React.createElement(
              'div',
              {
                className: classes(
                  cn,
                  'head-cell-inner',
                  [size, headClassName],
                  {
                    sort: !!col.sort,
                  },
                ),
                style: headStyle,
              },
              title,
              col.sort && _this.renderSorterIcon(col),
            ),
          );
        }),
      );
    };
    // 渲染左侧固定表头
    _this.renderLeftFixedHead = function(
      renderDataSource,
      leftFixedColumns,
      width,
      selectCol,
    ) {
      var cn = componentName;
      var _a = _this.props,
        scroll = _a.scroll,
        border = _a.border;
      var _b = _this.state,
        xScrollPosition = _b.xScrollPosition,
        headHeight = _b.headHeight;
      return React.createElement(
        'div',
        {
          className: classes(cn, 'left-fixed-head', [xScrollPosition], {
            border: border,
            'scroll-y': scroll && scroll.y && scroll.x,
          }),
          style: { width: width + 'px', height: headHeight + 'px' },
        },
        _this.renderHead(renderDataSource, leftFixedColumns, selectCol),
      );
    };
    // 判断左侧表头是否需要加遮罩，隐藏 y 轴滚动条和 body 对齐
    _this.renderMaskedLeftFixedHead = function(renderDataSource) {
      var cn = componentName;
      var _a = _this.props,
        columns = _a.columns,
        scroll = _a.scroll,
        selectCol = _a.selectCol;
      var xScrollPosition = _this.state.xScrollPosition;
      var leftFixedColumns = columns.filter(function(col) {
        return col.fixed === 'left';
      });
      if (leftFixedColumns.length === 0 && !selectCol) {
        // 左固定为空且无选择列，默认固定第一列
        leftFixedColumns.push(columns[0]);
      }
      var width =
        leftFixedColumns.reduce(function(prev, col) {
          return prev + col.width;
        }, 0) + (selectCol ? 60 : 0);
      var scrollBarWidth = _this.getScrollBarWidth();
      if (scroll && scroll.x && scroll.y) {
        return React.createElement(
          'div',
          {
            className: classes(cn, 'left-fixed-head-mask', [xScrollPosition]),
            style: {
              width: width - scrollBarWidth - 1 + 'px',
              overflow: 'hidden',
            },
          },
          _this.renderLeftFixedHead(
            renderDataSource,
            leftFixedColumns,
            width,
            selectCol,
          ),
        );
      } else {
        return _this.renderLeftFixedHead(
          renderDataSource,
          leftFixedColumns,
          width,
          selectCol,
        );
      }
    };
    // 渲染右侧固定表头
    _this.renderRightFixedHead = function(renderDataSource) {
      var cn = componentName;
      var _a = _this.props,
        columns = _a.columns,
        border = _a.border;
      var _b = _this.state,
        xScrollPosition = _b.xScrollPosition,
        headHeight = _b.headHeight;
      var rightFixedColumns = columns.filter(function(col) {
        return col.fixed === 'right';
      });
      if (rightFixedColumns.length === 0) {
        // 右固定为空，默认固定最后一列
        rightFixedColumns.push(columns[columns.length - 1]);
      }
      var width = rightFixedColumns.reduce(function(prev, col) {
        return prev + col.width;
      }, 0);
      return React.createElement(
        'div',
        {
          className: classes(cn, 'right-fixed-head', [xScrollPosition], {
            border: border,
          }),
          style: { width: width + 'px', height: headHeight + 'px' },
        },
        _this.renderHead(renderDataSource, rightFixedColumns, false),
      );
    };
    // 可排序时渲染排序图标
    _this.renderSorterIcon = function(column) {
      var cn = componentName;
      var _a = _this.state,
        sortKey = _a.sortKey,
        sortOrder = _a.sortOrder;
      var key = column.key,
        sorter = column.sorter;
      return React.createElement(
        'div',
        { className: 'sort-icon' },
        sorter
          ? React.createElement(Icon, {
              name: 'triangle-reverse',
              className: classes(cn, 'descend', {
                active: sortKey === key && sortOrder === false,
              }),
              size: 10,
              onClick: function() {
                return _this.handleClickSortIcon(key, false, sorter);
              },
            })
          : React.createElement(
              React.Fragment,
              null,
              React.createElement(Icon, {
                name: 'triangle',
                className: classes(cn, 'ascend', {
                  active: sortKey === key && sortOrder === 'ascend',
                }),
                size: 10,
                onClick: function() {
                  return _this.handleClickSortIcon(key, 'ascend', undefined);
                },
              }),
              React.createElement(Icon, {
                name: 'triangle-reverse',
                className: classes(cn, 'descend', {
                  active: sortKey === key && sortOrder === 'descend',
                }),
                size: 10,
                onClick: function() {
                  return _this.handleClickSortIcon(key, 'descend', undefined);
                },
              }),
            ),
      );
    };
    // 监听点击排序图标
    _this.handleClickSortIcon = function(key, order, fn) {
      var _a = _this.state,
        sortKey = _a.sortKey,
        sortOrder = _a.sortOrder;
      // 未排序，点击图标，排序
      if (key !== sortKey || order !== sortOrder) {
        fn
          ? _this.setState({
              sortKey: key,
              sorter: fn,
              sortOrder: order,
            })
          : _this.setState({
              sortKey: key,
              sortOrder: order,
            });
      }
      // 已排序，点击原图标则取消排序
      if (key === sortKey && order === sortOrder) {
        _this.setState({
          sortKey: '',
        });
      }
    };
    // 表头选择框类名
    _this.getSelectionClassName = function(renderDataSource) {
      var selectedKeys = _this.state.selectedKeys;
      var renderKeys = renderDataSource.map(function(data) {
        return data.key;
      });
      var isEqual = arrayIsEqual(selectedKeys, renderKeys);
      if (isEqual && selectedKeys.length !== 0) {
        return 'checked';
      } else {
        for (
          var _i = 0, selectedKeys_1 = selectedKeys;
          _i < selectedKeys_1.length;
          _i++
        ) {
          var key = selectedKeys_1[_i];
          if (renderKeys.indexOf(key) > -1) {
            return 'determinate';
          }
        }
        return '';
      }
    };
    // 监听点击表头选择框
    _this.handleClickHeadSelection = function(renderDataSource) {
      var selectedKeys = _this.state.selectedKeys;
      var renderKeys = renderDataSource.map(function(data) {
        return data.key;
      });
      var isEqual = arrayIsEqual(selectedKeys, renderKeys);
      if (isEqual) {
        _this.setState({ selectedKeys: [] });
      } else {
        _this.setState({ selectedKeys: renderKeys });
      }
    };
    // 监听点击选择框
    _this.handleClickBodySelection = function(key) {
      var selectedKeys = _this.state.selectedKeys;
      _this.setState({
        selectedKeys:
          selectedKeys.indexOf(key) > -1
            ? selectedKeys.filter(function(item) {
                return item !== key;
              })
            : __spreadArrays([key], selectedKeys),
      });
    };
    _this.renderBody = function(renderDataSource) {
      var _a = _this.props,
        columns = _a.columns,
        selectCol = _a.selectCol;
      return renderDataSource.map(function(data, index) {
        return _this.renderRow(columns, data, index, selectCol);
      });
    };
    // 监听鼠标 hover 某一行
    _this.handleHoverRowKey = function(key) {
      if (key !== _this.state.hoverRowKey) {
        _this.setState({
          hoverRowKey: key,
        });
      }
    };
    // 渲染 body 行
    _this.renderRow = function(columns, data, index, selectCol) {
      var cn = componentName;
      var _a = _this.props,
        stripe = _a.stripe,
        rowHeight = _a.rowHeight;
      var hoverRowKey = _this.state.hoverRowKey;
      var key = data.key;
      return React.createElement(
        'div',
        {
          className: classes(cn, 'body-inner-row', {
            stripe: stripe && index % 2 === 1,
            hover: hoverRowKey === key,
          }),
          key: key,
          onMouseEnter: function() {
            return _this.handleHoverRowKey(key);
          },
          style: rowHeight ? { height: rowHeight + 'px' } : {},
        },
        selectCol && _this.renderSelectColCell(key),
        _this.renderBodyRowCell(columns, data),
      );
    };
    // 渲染 row 中的列
    _this.renderBodyRowCell = function(columns, data) {
      var cn = componentName;
      var _a = _this.props,
        size = _a.size,
        border = _a.border;
      return columns.map(function(col, index) {
        var key = col.key,
          width = col.width,
          render = col.render,
          className = col.className,
          style = col.style;
        return render
          ? _this.renderExtraCell(data.key, index, col)
          : React.createElement(
              'div',
              {
                className: classes(cn, 'body-inner-row-cell', {
                  border: border,
                }),
                key: key,
                style: width
                  ? { width: width + 'px', flexShrink: 0 }
                  : { flexGrow: 1 },
              },
              React.createElement(
                'div',
                {
                  className: classes(cn, 'body-inner-row-cell-inner', [
                    size,
                    className,
                  ]),
                  style: style,
                },
                data[key],
              ),
            );
      });
    };
    // 渲染 extra cell
    _this.renderExtraCell = function(dataSourceKey, index, col) {
      var cn = componentName;
      var _a = _this.props,
        size = _a.size,
        border = _a.border;
      // render 函数被调用时将接收到对应行的 dataSourceKey（来自 dataSource 对应项的 key） 和 index 两个参数
      var key = col.key,
        render = col.render,
        width = col.width,
        className = col.className,
        style = col.style;
      var node = render(dataSourceKey, index);
      return React.createElement(
        'div',
        {
          key: key,
          className: classes(cn, 'body-inner-row-cell', { border: border }),
          style: width
            ? { width: width + 'px', flexShrink: 0 }
            : { flexGrow: 1 },
        },
        React.createElement(
          'div',
          {
            className: classes(cn, 'body-inner-row-cell-inner', [
              size,
              className,
            ]),
            style: style,
          },
          node,
        ),
      );
    };
    // 渲染 selectCol cell
    _this.renderSelectColCell = function(key) {
      var cn = componentName;
      var _a = _this.props,
        size = _a.size,
        border = _a.border;
      var selectedKeys = _this.state.selectedKeys;
      var checked = selectedKeys.indexOf(key) > -1;
      return React.createElement(
        'div',
        {
          className: classes(cn, 'body-inner-row-cell', ['check-box'], {
            border: border,
          }),
          style: { width: '60px', flexShrink: 0 },
        },
        React.createElement(
          'div',
          { className: classes(cn, 'body-inner-row-cell-inner', [size]) },
          React.createElement('div', {
            className: classes(cn, 'selection', { checked: checked }),
            onClick: function() {
              return _this.handleClickBodySelection(key);
            },
          }),
        ),
      );
    };
    // dataSource 需排序则返回排序后的 dataSource（深拷贝）
    _this.getRenderDataSource = function() {
      var dataSource = _this.getPageDataSource();
      var _a = _this.state,
        sortKey = _a.sortKey,
        sorter = _a.sorter,
        sortOrder = _a.sortOrder;
      if (!sortKey) {
        return dataSource;
      }
      // 无 sorter 升序降序
      if (!sorter) {
        return dataSource.sort(function(rowA, rowB) {
          // 升序
          if (sortOrder === 'ascend') {
            return rowA[sortKey] > rowB[sortKey] ? 1 : -1;
          }
          // 降序
          if (sortOrder === 'descend') {
            return rowA[sortKey] > rowB[sortKey] ? -1 : 1;
          }
          return 0;
        });
      }
      // 根据 sorter 排序
      return dataSource.sort(sorter);
    };
    // 分页
    _this.getPageDataSource = function() {
      var _a = _this.props,
        pager = _a.pager,
        pageSize = _a.pageSize,
        dataSource = _a.dataSource;
      var page = _this.state.page;
      var renderItems = pager
        ? dataSource.slice(pageSize * (page - 1), pageSize * page)
        : __spreadArrays(dataSource);
      return renderItems;
    };
    // 监听分页改变
    _this.handlePageChange = function(page) {
      if (page !== _this.state.page) {
        _this.setState({
          page: page,
        });
      }
    };
    // 渲染左侧固定列
    _this.renderLeftFixedBody = function(
      renderDataSource,
      leftFixedColumns,
      width,
      selectCol,
    ) {
      var cn = componentName;
      var scroll = _this.props.scroll;
      var _a = _this.state,
        headHeight = _a.headHeight,
        xScrollPosition = _a.xScrollPosition;
      return React.createElement(
        'div',
        {
          className: classes(cn, 'left-fixed-body', [xScrollPosition]),
          style:
            scroll && scroll.y
              ? {
                  width: width + 'px',
                  height: scroll.y + 'px',
                  overflowY: 'scroll',
                  top: headHeight + 'px',
                }
              : { width: width + 'px', top: headHeight + 'px' },
          onScroll: _this.handleLeftFixedScrollY,
          ref: _this.saveLeftFixedBodyEl,
          onMouseEnter: function() {
            return _this.handleMouseEnterEl('leftFixed');
          },
        },
        React.createElement(
          'div',
          { className: classes(cn, 'left-fixed-body-inner') },
          renderDataSource.map(function(data, index) {
            return _this.renderRow(leftFixedColumns, data, index, selectCol);
          }),
        ),
      );
    };
    // 判断左侧固定列是否需要加遮罩，隐藏 y 滚动条
    _this.renderMaskedLeftFixedBody = function(renderDateSource) {
      var cn = componentName;
      var _a = _this.props,
        columns = _a.columns,
        scroll = _a.scroll,
        selectCol = _a.selectCol;
      var _b = _this.state,
        headHeight = _b.headHeight,
        xScrollPosition = _b.xScrollPosition;
      var leftFixedColumns = columns.filter(function(col) {
        return col.fixed === 'left';
      });
      if (leftFixedColumns.length === 0 && !selectCol) {
        // 左固定为空且无选择列，默认固定第一列
        leftFixedColumns.push(columns[0]);
      }
      var width =
        leftFixedColumns.reduce(function(prev, col) {
          return prev + col.width;
        }, 0) + (selectCol ? 60 : 0);
      var scrollBarWidth = _this.getScrollBarWidth();
      if (scroll && scroll.x && scroll.y) {
        return React.createElement(
          'div',
          {
            className: classes(cn, 'left-fixed-body-mask', [xScrollPosition]),
            style: {
              width: width - scrollBarWidth - 1 + 'px',
              height: scroll.y + 'px',
              top: headHeight + 'px',
              overflow: 'hidden',
            },
          },
          _this.renderLeftFixedBody(
            renderDateSource,
            leftFixedColumns,
            width,
            selectCol,
          ),
        );
      } else {
        return _this.renderLeftFixedBody(
          renderDateSource,
          leftFixedColumns,
          width,
          selectCol,
        );
      }
    };
    // 获取滚动条宽度
    _this.getScrollBarWidth = function() {
      return (
        window.innerWidth - document.body.clientWidth ||
        document.documentElement.clientHeight
      );
    };
    // 渲染右侧固定列
    _this.renderRightFixedBody = function(renderDataSource) {
      var cn = componentName;
      var _a = _this.props,
        columns = _a.columns,
        scroll = _a.scroll;
      var _b = _this.state,
        headHeight = _b.headHeight,
        xScrollPosition = _b.xScrollPosition;
      var rightFixedColumns = columns.filter(function(col) {
        return col.fixed === 'right';
      });
      if (rightFixedColumns.length === 0) {
        // 右固定为空，默认固定最后一列
        rightFixedColumns.push(columns[columns.length - 1]);
      }
      var width = rightFixedColumns.reduce(function(prev, col) {
        return prev + col.width;
      }, 0);
      return React.createElement(
        'div',
        {
          className: classes(cn, 'right-fixed-body', [xScrollPosition]),
          style:
            scroll && scroll.y
              ? {
                  width: width + 'px',
                  height: scroll.y + 'px',
                  overflowY: 'scroll',
                  top: headHeight + 'px',
                }
              : { width: width + 'px', top: headHeight + 'px' },
          onScroll: _this.handleRightFixedScrollY,
          ref: _this.saveRightFixedBodyEl,
          onMouseEnter: function() {
            return _this.handleMouseEnterEl('rightFixed');
          },
        },
        React.createElement(
          'div',
          { className: classes(cn, 'right-fixed-body-inner') },
          renderDataSource.map(function(data, index) {
            return _this.renderRow(rightFixedColumns, data, index, false);
          }),
        ),
      );
    };
    // 监听左侧固定列 Y 轴滚动
    _this.handleLeftFixedScrollY = function() {
      var scroll = _this.props.scroll;
      if (!scroll || !scroll.x || !scroll.y || _this.mouseIn !== 'leftFixed') {
        return;
      }
      var scrollTop = _this.leftFixedBodyEl.scrollTop;
      _this.bodyEl.scrollTop = scrollTop;
      _this.rightFixedBodyEl.scrollTop = scrollTop;
    };
    // 监听右侧固定列 Y 轴滚动
    _this.handleRightFixedScrollY = function() {
      var scroll = _this.props.scroll;
      if (!scroll || !scroll.x || !scroll.y || _this.mouseIn !== 'rightFixed') {
        return;
      }
      var scrollTop = _this.rightFixedBodyEl.scrollTop;
      _this.bodyEl.scrollTop = scrollTop;
      _this.leftFixedBodyEl.scrollTop = scrollTop;
    };
    // 监听 body Y轴滚动
    _this.handleBodyScrollY = function() {
      var scroll = _this.props.scroll;
      if (!scroll || !scroll.x || !scroll.y || _this.mouseIn !== 'bodyInner') {
        return;
      }
      var scrollTop = _this.bodyEl.scrollTop;
      _this.rightFixedBodyEl.scrollTop = scrollTop;
      _this.leftFixedBodyEl.scrollTop = scrollTop;
    };
    // 监听鼠标 enter
    _this.handleMouseEnterEl = function(elName) {
      _this.mouseIn = elName;
    };
    // 监听鼠标离开 body 设置 hoverRowKey 为空
    _this.handleMouseLeaveBody = function() {
      _this.mouseIn = '';
      _this.setState({
        hoverRowKey: '',
      });
    };
    // 监听 table 横向滚动
    _this.handleTableScroll = function() {
      var scrollLeft = _this.tableEl.scrollLeft;
      var maxScrollLeft = _this.maxScrollLeft;
      var xScrollPosition = _this.state.xScrollPosition;
      if (scrollLeft === 0 && xScrollPosition !== 'start') {
        _this.setState({
          xScrollPosition: 'start',
        });
      } else if (
        Math.ceil(scrollLeft) >= maxScrollLeft &&
        xScrollPosition !== 'end'
      ) {
        _this.setState({
          xScrollPosition: 'end',
        });
      } else if (xScrollPosition !== 'middle') {
        _this.setState({
          xScrollPosition: 'middle',
        });
      }
    };
    _this.state = {
      selectedKeys: [],
      sortKey: '',
      sorter: undefined,
      sortOrder: false,
      page: 1,
      headHeight: 0,
      hoverRowKey: '',
      xScrollPosition: 'start',
    };
    return _this;
  }
  Table.getDerivedStateFromProps = function(nextProps, prevState) {
    var dataSource = nextProps.dataSource;
    var selectedKeys = prevState.selectedKeys;
    var allKeys = dataSource.map(function(data) {
      return data.key;
    });
    var newSelectedKeys = selectedKeys.filter(function(key) {
      return allKeys.indexOf(key) > -1;
    });
    // 过滤掉删掉的 data 对应的 selectedKey
    var isEqual = arrayIsEqual(selectedKeys, newSelectedKeys);
    if (isEqual) {
      return null;
    } else {
      return { selectedKeys: newSelectedKeys };
    }
  };
  Table.prototype.componentDidMount = function() {
    var scroll = this.props.scroll;
    if (scroll && scroll.x) {
      this.maxScrollLeft = this.getMaxScrollLeft();
    }
    var _a = this.headEl.getBoundingClientRect(),
      top = _a.top,
      bottom = _a.bottom;
    this.setState({
      headHeight: bottom - top,
    });
  };
  Table.prototype.componentDidUpdate = function(prevProps, prevState) {
    var onSelectChange = this.props.onSelectChange;
    if (onSelectChange) {
      var prevSelectedKeys = prevState.selectedKeys;
      var selectedKeys = this.state.selectedKeys;
      var isEqual = arrayIsEqual(selectedKeys, prevSelectedKeys);
      if (!isEqual) {
        onSelectChange(selectedKeys);
      }
    }
  };
  Table.prototype.render = function() {
    var _this = this;
    var cn = componentName;
    var renderDataSource = this.getRenderDataSource();
    var _a = this.props,
      dataSource = _a.dataSource,
      columns = _a.columns,
      pager = _a.pager,
      pageSize = _a.pageSize,
      scroll = _a.scroll,
      size = _a.size,
      border = _a.border,
      selectCol = _a.selectCol,
      loading = _a.loading,
      spinSize = _a.spinSize;
    var shouldRenderFixedCol = scroll && scroll.x;
    var headStyle =
      scroll && scroll.x
        ? {
            width: scroll.x + 'px',
          }
        : {};
    var bodyStyle = Object.assign(
      {},
      scroll && scroll.y ? { height: scroll.y + 'px' } : {},
      scroll && scroll.x
        ? {
            width: scroll.x + 'px',
          }
        : {},
    );
    return React.createElement(
      Spin,
      { spinning: loading, size: spinSize },
      React.createElement(
        'div',
        { className: classes(cn, 'wrapper'), ref: this.saveWrapperEl },
        React.createElement(
          'div',
          {
            className: classes(cn, '', { 'scroll-x': scroll && scroll.x }),
            role: 'table',
            onScroll: this.handleTableScroll,
            ref: this.saveTableEl,
          },
          React.createElement(
            'div',
            {
              className: classes(cn, 'head', {
                'scroll-y': scroll && scroll.y,
              }),
              style: headStyle,
              ref: this.saveHeadEl,
            },
            React.createElement(
              'div',
              { className: classes(cn, 'head-inner', { border: border }) },
              this.renderHead(renderDataSource, columns, selectCol),
            ),
            shouldRenderFixedCol &&
              this.renderMaskedLeftFixedHead(renderDataSource),
            shouldRenderFixedCol && this.renderRightFixedHead(renderDataSource),
          ),
          React.createElement(
            'div',
            {
              className: classes(cn, 'body', {
                'scroll-y': scroll && scroll.y,
              }),
              style: bodyStyle,
              ref: this.saveBodyEl,
              onScroll: this.handleBodyScrollY,
              onMouseLeave: this.handleMouseLeaveBody,
            },
            React.createElement(
              'div',
              {
                className: classes(cn, 'body-inner'),
                onMouseEnter: function() {
                  return _this.handleMouseEnterEl('bodyInner');
                },
              },
              this.renderBody(renderDataSource),
            ),
            shouldRenderFixedCol &&
              this.renderMaskedLeftFixedBody(renderDataSource),
            shouldRenderFixedCol && this.renderRightFixedBody(renderDataSource),
          ),
          pager &&
            dataSource &&
            dataSource.length &&
            React.createElement(
              'div',
              { style: { padding: '10px', textAlign: 'end' } },
              React.createElement(Pager, {
                total: Math.ceil(dataSource.length / pageSize),
                onChange: this.handlePageChange,
                size: size,
              }),
            ),
        ),
      ),
    );
  };
  Table.displayName = componentName;
  Table.defaultProps = {
    selectCol: false,
    stripe: false,
    border: false,
    pager: false,
    pageSize: 10,
    size: 'default',
    loading: false,
    spinSize: 30,
  };
  Table.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.object).isRequired,
    dataSource: PropTypes.arrayOf(PropTypes.object).isRequired,
    selectCol: PropTypes.bool,
    scroll: PropTypes.object,
    stripe: PropTypes.bool,
    border: PropTypes.bool,
    pager: PropTypes.bool,
    pageSize: PropTypes.number,
    size: PropTypes.oneOf(['small', 'default']),
    rowHeight: PropTypes.number,
    onSelectChange: PropTypes.func,
    loading: PropTypes.bool,
    spinSize: PropTypes.number,
  };
  return Table;
})(React.Component);
export default Table;
