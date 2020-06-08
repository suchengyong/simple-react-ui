import * as React from 'react';
import * as PropTypes from 'prop-types';
export interface SlidesProps {
  duration?: number;
  dots?: boolean;
  className?: string;
  style?: React.CSSProperties;
  beforeChange?: (from: number, to: number) => any;
  afterChange?: (current: number, from: number) => any;
}
export interface SlidesState {
  hasTransitionClassName: boolean;
  current: number;
}
declare class Slides extends React.Component<SlidesProps, SlidesState> {
  static displayName: string;
  static defaultProps: {
    duration: number;
    dots: boolean;
  };
  static propTypes: {
    duration: PropTypes.Requireable<number>;
    dots: PropTypes.Requireable<boolean>;
    className: PropTypes.Requireable<string>;
    style: PropTypes.Requireable<object>;
    beforeChange: PropTypes.Requireable<(...args: any[]) => any>;
    afterChange: PropTypes.Requireable<(...args: any[]) => any>;
  };
  state: {
    hasTransitionClassName: boolean;
    current: number;
  };
  private containerRef;
  private isTransitioning;
  private length;
  private prevIndex;
  private timeout;
  componentDidMount(): void;
  componentWillUnmount(): void;
  saveContinerRef: (ele: HTMLDivElement) => void;
  cloneNode(): void;
  autoPlay(): void;
  next(): void;
  prev(): void;
  goTo(n: number): void;
  setCurrent(n: number): void;
  handleTransitionEnd: () => void;
  controllContainer(n: number): void;
  handleMouseEnter: React.MouseEventHandler;
  handleMouseLeave: React.MouseEventHandler;
  render(): JSX.Element;
}
export default Slides;
