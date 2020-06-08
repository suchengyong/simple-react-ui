import * as React from 'react';
import * as PropTypes from 'prop-types';
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
declare class Col extends React.Component<IColProps> {
  static displayName: string;
  static defaultProps: {
    gutter: number;
  };
  static propTypes: {
    gutter: PropTypes.Requireable<number>;
    span: PropTypes.Requireable<number>;
    offset: PropTypes.Requireable<number>;
    className: PropTypes.Requireable<string>;
    style: PropTypes.Requireable<object>;
  };
  getColClassName: () => string[];
  render(): JSX.Element;
}
export default Col;
