import * as React from 'react';
import * as PropTypes from 'prop-types';
export interface ScrollProps {
  yBarVisible?: boolean;
  className?: string;
  style?: React.CSSProperties;
  yTrackClassName?: string;
  yTrackStyle?: React.CSSProperties;
  yBarClassName?: string;
  yBarStyle?: React.CSSProperties;
  onScroll?: (translateY: number) => any;
}
export interface ScrollState {
  translateY: number;
  yVisible: boolean;
}
declare class Scroll extends React.Component<ScrollProps, ScrollState> {
  static displayName: string;
  static defaultProps: {
    yBarVisible: boolean;
  };
  static propTypes: {
    yBarVisible: PropTypes.Requireable<boolean>;
    xBarVisible: PropTypes.Requireable<boolean>;
    className: PropTypes.Requireable<string>;
    style: PropTypes.Requireable<object>;
    yTrackClassName: PropTypes.Requireable<string>;
    yTrackStyle: PropTypes.Requireable<object>;
    yBarClassName: PropTypes.Requireable<string>;
    yBarStyle: PropTypes.Requireable<object>;
  };
  state: {
    translateY: number;
    yVisible: boolean;
  };
  private wrapperRef;
  private containerRef;
  private yBarRef;
  private wrapperHeight;
  private containerHeight;
  private barHeight;
  private maxContainerScrollHeight;
  private barStartTranslateY;
  private maxBarScrollHeight;
  private startClientY;
  private mouseDown;
  private mouseIn;
  private userSelect;
  private yTrackRef;
  componentDidMount(): void;
  componentDidUpdate(prevProps: ScrollProps, prevState: ScrollState): void;
  componentWillUnmount(): void;
  getElRect: () => void;
  saveWrapperRef: (node: HTMLDivElement) => void;
  saveContainerRef: (node: HTMLDivElement) => void;
  saveYBarRef: (node: HTMLDivElement) => void;
  saveYTrackRef: (node: HTMLDivElement) => void;
  handleWheel: (e: React.WheelEvent<HTMLDivElement>) => void;
  updateBar: (translateY: number) => void;
  getTranslateY: (deltaY: number) => number;
  calculateTranslateYFromDeltaY: (deltaY: number) => number;
  handleMouseDown: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  handleMouseMove: (e: MouseEvent) => void;
  handleMouseUp: (e: MouseEvent) => void;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
  handleClickTrack: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  render(): JSX.Element;
}
export default Scroll;
