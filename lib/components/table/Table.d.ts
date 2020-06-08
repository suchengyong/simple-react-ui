import * as React from 'react';
import * as PropTypes from 'prop-types';
export interface Data {
  key: string;
  [propName: string]: string | React.ReactNode;
}
export interface Column {
  title: string | React.ReactNode;
  key: string;
  width: number;
  render?: (key: string, index: number) => string | React.ReactNode;
  sort?: boolean;
  sorter?: (rowA: Data, rowB: Data) => any;
  fixed?: 'left' | 'right';
  headClassName?: string;
  headStyle?: React.CSSProperties;
  className?: string;
  style?: React.CSSProperties;
}
export interface Scroll {
  x?: number;
  y?: number;
}
export interface TableProps {
  columns: Column[];
  dataSource: Data[];
  selectCol?: boolean;
  scroll?: Scroll;
  stripe?: boolean;
  border?: boolean;
  pager?: boolean;
  pageSize?: number;
  size?: 'default' | 'small';
  rowHeight?: number;
  onSelectChange?: (selectedKeys: string[]) => any;
  loading?: boolean;
  spinSize?: number;
}
export interface TableState {
  selectedKeys: string[];
  sortKey: string;
  sorter: ((rowA: Data, rowB: Data) => any) | undefined;
  sortOrder: 'ascend' | 'descend' | false;
  page: number;
  headHeight: number;
  hoverRowKey: string;
  xScrollPosition: 'start' | 'middle' | 'end';
}
declare class Table extends React.Component<TableProps, TableState> {
  static displayName: string;
  static defaultProps: {
    selectCol: boolean;
    stripe: boolean;
    border: boolean;
    pager: boolean;
    pageSize: number;
    size: string;
    loading: boolean;
    spinSize: number;
  };
  static propTypes: {
    columns: PropTypes.Validator<object[]>;
    dataSource: PropTypes.Validator<object[]>;
    selectCol: PropTypes.Requireable<boolean>;
    scroll: PropTypes.Requireable<object>;
    stripe: PropTypes.Requireable<boolean>;
    border: PropTypes.Requireable<boolean>;
    pager: PropTypes.Requireable<boolean>;
    pageSize: PropTypes.Requireable<number>;
    size: PropTypes.Requireable<string>;
    rowHeight: PropTypes.Requireable<number>;
    onSelectChange: PropTypes.Requireable<(...args: any[]) => any>;
    loading: PropTypes.Requireable<boolean>;
    spinSize: PropTypes.Requireable<number>;
  };
  static getDerivedStateFromProps(
    nextProps: TableProps,
    prevState: TableState,
  ): {
    selectedKeys: string[];
  };
  private headEl;
  private bodyEl;
  private rightFixedBodyEl;
  private leftFixedBodyEl;
  private tableEl;
  private wrapperEl;
  private mouseIn;
  private maxScrollLeft;
  constructor(props: TableProps);
  componentDidMount(): void;
  componentDidUpdate(prevProps: TableProps, prevState: TableState): void;
  saveBodyEl: (node: HTMLDivElement) => void;
  saveHeadEl: (node: HTMLDivElement) => void;
  saveLeftFixedBodyEl: (node: HTMLDivElement) => void;
  saveRightFixedBodyEl: (node: HTMLDivElement) => void;
  saveTableEl: (node: HTMLDivElement) => void;
  saveWrapperEl: (node: HTMLDivElement) => void;
  getMaxScrollLeft: () => number;
  renderHead: (
    renderDataSource: Data[],
    columns: Column[],
    selectCol: boolean,
  ) => JSX.Element;
  renderLeftFixedHead: (
    renderDataSource: Data[],
    leftFixedColumns: Column[],
    width: number,
    selectCol: boolean,
  ) => JSX.Element;
  renderMaskedLeftFixedHead: (renderDataSource: Data[]) => JSX.Element;
  renderRightFixedHead: (renderDataSource: Data[]) => JSX.Element;
  renderSorterIcon: (column: Column) => JSX.Element;
  handleClickSortIcon: (
    key: string,
    order: false | 'ascend' | 'descend',
    fn?: (rowA: Data, rowB: Data) => any,
  ) => void;
  getSelectionClassName: (renderDataSource: Data[]) => string;
  handleClickHeadSelection: (renderDataSource: Data[]) => void;
  handleClickBodySelection: (key: string) => void;
  renderBody: (renderDataSource: Data[]) => JSX.Element[];
  handleHoverRowKey: (key: string) => void;
  renderRow: (
    columns: Column[],
    data: Data,
    index: number,
    selectCol: boolean,
  ) => JSX.Element;
  renderBodyRowCell: (columns: Column[], data: Data) => JSX.Element[];
  renderExtraCell: (
    dataSourceKey: string,
    index: number,
    col: Column,
  ) => JSX.Element;
  renderSelectColCell: (key: string) => JSX.Element;
  getRenderDataSource: () => Data[];
  getPageDataSource: () => Data[];
  handlePageChange: (page: number) => void;
  renderLeftFixedBody: (
    renderDataSource: Data[],
    leftFixedColumns: Column[],
    width: number,
    selectCol: boolean,
  ) => JSX.Element;
  renderMaskedLeftFixedBody: (renderDateSource: Data[]) => JSX.Element;
  getScrollBarWidth: () => number;
  renderRightFixedBody: (renderDataSource: Data[]) => JSX.Element;
  handleLeftFixedScrollY: React.ReactEventHandler<HTMLDivElement>;
  handleRightFixedScrollY: React.ReactEventHandler<HTMLDivElement>;
  handleBodyScrollY: React.ReactEventHandler<HTMLDivElement>;
  handleMouseEnterEl: (
    elName: '' | 'leftFixed' | 'bodyInner' | 'rightFixed',
  ) => void;
  handleMouseLeaveBody: () => void;
  handleTableScroll: React.ReactEventHandler<HTMLDivElement>;
  render(): JSX.Element;
}
export default Table;
