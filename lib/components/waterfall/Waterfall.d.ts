import * as React from 'react';
import * as PropTypes from 'prop-types';
export interface WaterfallProps {
  width?: number;
}
export interface WaterfallState {
  colCount: number;
  gutter: number;
}
declare class Waterfall extends React.Component<
  WaterfallProps,
  WaterfallState
> {
  static displayName: string;
  static defaultProps: {
    width: number;
  };
  static propTypes: {
    width: PropTypes.Requireable<number>;
  };
  private wrapperEl;
  componentDidMount(): void;
  saveWrapperEl: (node: HTMLDivElement) => void;
  calculateColCountAndGutter: () => void;
  calculateNodeHeight: (node: HTMLElement) => number;
  render(): JSX.Element;
}
export default Waterfall;
