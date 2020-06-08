import * as React from 'react';
import * as PropTypes from 'prop-types';
export interface RowProps {
  gutter?: number;
  className?: string;
  style?: React.CSSProperties;
}
export interface Option {
  span: number;
  offset?: number;
}
export interface IColProps {
  gutter?: number;
  span?: number;
  offset?: number;
  sm?: Option;
  md?: Option;
  lg?: Option;
  xl?: Option;
  className?: string;
  style?: React.CSSProperties;
}
declare class Row extends React.Component<RowProps> {
  static displayName: string;
  static defaultProps: {
    gutter: number;
  };
  static propTypes: {
    gutter: PropTypes.Requireable<number>;
    className: PropTypes.Requireable<string>;
    style: PropTypes.Requireable<object>;
  };
  render(): JSX.Element;
}
export default Row;
