import * as React from 'react';
import * as PropTypes from 'prop-types';
export interface PopoveProps {
  content: string | React.ReactNode;
  trigger?: 'click' | 'hover' | 'focus';
  position?: 'top' | 'left' | 'right' | 'bottom';
  defaultVisible?: boolean;
  visible?: boolean;
  popClosable?: boolean;
  onVisibleChange?: (visible: boolean) => any;
  className?: string;
  style?: React.CSSProperties;
}
export interface PopoveState {
  derivedVisible: boolean;
}
declare class Popover extends React.Component<PopoveProps, PopoveState> {
  static displayName: string;
  static defaultProps: {
    trigger: string;
    position: string;
    defaultVisible: boolean;
    popClosable: boolean;
  };
  static propTypes: {
    content: PropTypes.Validator<string | PropTypes.ReactElementLike>;
    trigger: PropTypes.Requireable<string>;
    position: PropTypes.Requireable<string>;
    defaultVisible: PropTypes.Requireable<boolean>;
    visible: PropTypes.Requireable<boolean>;
    onVisibleChange: PropTypes.Requireable<(...args: any[]) => any>;
    className: PropTypes.Requireable<string>;
    style: PropTypes.Requireable<object>;
    popClosable: PropTypes.Requireable<boolean>;
  };
  static getDerivedStateFromProps(
    nextProps: PopoveProps,
    prevState: PopoveState,
  ): {
    derivedVisible: boolean;
  };
  private triggerNode;
  private wrapperRef;
  private contentRef;
  private arrowRef;
  private delay;
  private timeout;
  constructor(props: PopoveProps);
  componentDidMount(): void;
  componentDidUpdate(prevProps: PopoveProps, prevState: PopoveState): void;
  componentWillUnmount(): void;
  saveWrapperRef: (node: HTMLDivElement) => void;
  saveContentRef: (node: HTMLDivElement) => void;
  saveArrowRef: (node: HTMLDivElement) => void;
  setArrowBorderColor: () => void;
  locateContent: () => void;
  handleClick: React.MouseEventHandler;
  handleClickDocument: (e: MouseEvent) => void;
  handleMouseEnter: React.MouseEventHandler;
  handleMouseLeave: React.MouseEventHandler;
  handleMouseEnterPop: React.MouseEventHandler;
  handleMouseLeavePop: React.MouseEventHandler;
  handleFocus: React.FocusEventHandler;
  handleBlur: React.FocusEventHandler;
  open: () => void;
  close: () => void;
  getChildrenEventHandlers: () => object;
  renderChildren(): JSX.Element;
  render(): JSX.Element;
}
export default Popover;
