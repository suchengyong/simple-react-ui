import * as React from 'react';
import * as PropTypes from 'prop-types';
export interface RateProps {
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => any;
  onHoverChange?: (value: number) => any;
  allowClear?: boolean;
  allowHalf?: boolean;
  disabled?: boolean;
  tips?: string | React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
export interface RateState {
  derivedValue: number;
  hoverValue: number;
}
declare class Rate extends React.Component<RateProps, RateState> {
  static displayName: string;
  static defaultProps: {
    allowClear: boolean;
    allowHalf: boolean;
    disabled: boolean;
  };
  static propTypes: {
    value: PropTypes.Requireable<number>;
    defaultValue: PropTypes.Requireable<number>;
    onChange: PropTypes.Requireable<(...args: any[]) => any>;
    onHoverChange: PropTypes.Requireable<(...args: any[]) => any>;
    allowClear: PropTypes.Requireable<boolean>;
    allowHalf: PropTypes.Requireable<boolean>;
    disabled: PropTypes.Requireable<boolean>;
    tips: PropTypes.Requireable<string | PropTypes.ReactElementLike>;
    className: PropTypes.Requireable<string>;
    style: PropTypes.Requireable<object>;
  };
  static getDerivedStateFromProps(
    nextProps: RateProps,
    prevState: RateState,
  ): {
    derivedValue: number;
  };
  constructor(props: RateProps);
  handleOnChange: (value: number) => void;
  handleClickStar: (index: number, position: string) => void;
  handleOnHoverChange: (value: number) => void;
  handleHover: (index: number, position: string) => void;
  handleMouseLeave: () => void;
  render(): JSX.Element;
}
export default Rate;
