import * as React from 'react';
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
export interface TableProps {
  columns: Column[];
  dataSource: Data[];
  height: number;
  rowHeight: number;
}
export interface TableState {
  renderDataSource: Data[];
  count: number;
  topHeight: number;
}
declare class VirtualTable extends React.Component<TableProps, TableState> {
  static displayName: string;
  constructor(props: TableProps);
  changeRenderDataSource: (y: number) => void;
  renderHead: (renderDataSource: Data[], columns: Column[]) => JSX.Element;
  renderBody: (renderDataSource: Data[]) => JSX.Element[];
  renderRow: (columns: Column[], data: Data, index: number) => JSX.Element;
  renderBodyRowCell: (columns: Column[], data: Data) => JSX.Element[];
  render(): JSX.Element;
}
export default VirtualTable;
