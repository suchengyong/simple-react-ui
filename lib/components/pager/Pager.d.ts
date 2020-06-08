import * as React from 'react';
import * as PropTypes from 'prop-types';
export interface PagerProps {
  current?: number;
  total: number;
  onChange?: (current: number) => any;
  simple?: boolean;
  size?: 'small' | 'default';
  defaultCurrent?: number;
  hideOnSinglePage?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
export interface PagerState {
  derivedCurrent: number;
  derivedTotal: number;
}
declare class Pager extends React.Component<PagerProps, PagerState> {
  static displayName: string;
  static defaultProps: {
    simple: boolean;
    size: string;
    defaultCurrent: number;
    hideOnSinglePage: boolean;
  };
  static propTypes: {
    current: PropTypes.Requireable<number>;
    total: PropTypes.Validator<number>;
    onChange: PropTypes.Requireable<(...args: any[]) => any>;
    simple: PropTypes.Requireable<boolean>;
    size: PropTypes.Requireable<string>;
    defaultCurrent: PropTypes.Requireable<number>;
    className: PropTypes.Requireable<string>;
    style: PropTypes.Requireable<object>;
    hideOnSinglePage: PropTypes.Requireable<boolean>;
  };
  static getDerivedStateFromProps(
    nextProps: PagerProps,
    prevState: PagerState,
  ):
    | {
        derivedCurrent: number;
        derivedTotal: number;
      }
    | {
        derivedCurrent: number;
        derivedTotal?: undefined;
      }
    | {
        derivedTotal: number;
        derivedCurrent?: undefined;
      };
  constructor(props: PagerProps);
  handleClickNum(n: number): void;
  handleSkip(payload: number): void;
  handleClickDot: (index: number) => void;
  handleOnChange: (n: number) => void;
  render(): JSX.Element;
}
export default Pager;
