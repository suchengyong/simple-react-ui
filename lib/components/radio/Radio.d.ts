import * as React from 'react';
import * as PropTypes from 'prop-types';
export interface RadioProps {
  value?: any;
  defaultValue?: any;
  onChange?: (checkedValue: any, e: React.MouseEvent) => any;
  vertical?: boolean;
  radioStyle?: 'radio' | 'button';
  className?: string;
  style?: React.CSSProperties;
}
export interface RadionState {
  checkedValue: any;
}
export interface OptionProps {
  value: any;
  checkedValue?: any;
  onClick?: (checkedValue: any, e: React.MouseEvent) => any;
  radioStyle?: 'radio' | 'button';
  disabled?: boolean;
  vertical?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
declare class Radio extends React.Component<RadioProps, RadionState> {
  static displayName: string;
  static defaultProps: {
    vertical: boolean;
    radioStyle: string;
  };
  static propTypes: {
    defaultValue: PropTypes.Requireable<any>;
    onChange: PropTypes.Requireable<(...args: any[]) => any>;
    vertical: PropTypes.Requireable<boolean>;
    radioStyle: PropTypes.Requireable<string>;
    className: PropTypes.Requireable<string>;
    style: PropTypes.Requireable<object>;
  };
  static getDerivedStateFromProps(
    nextProps: RadioProps,
    prevState: RadionState,
  ): {
    checkedValue: any;
  };
  constructor(props: RadioProps);
  componentDidMount(): void;
  renderChildren: () => any;
  handleClick: (checkedValue: any, e: React.MouseEvent) => any;
  render(): JSX.Element;
}
export default Radio;
