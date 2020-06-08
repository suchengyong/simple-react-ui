import * as React from 'react';
import * as PropTypes from 'prop-types';
export interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  size?: 'small' | 'default';
  onChange?: (checked: boolean, e: React.MouseEvent) => any;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
export interface SwitchState {
  derivedChecked: boolean;
}
declare class Switch extends React.Component<SwitchProps, SwitchState> {
  static displayName: string;
  static defaultProps: {
    size: string;
    defaultChecked: boolean;
    disabled: boolean;
  };
  static propTypes: {
    defaultChecked: PropTypes.Requireable<boolean>;
    onChange: PropTypes.Requireable<(...args: any[]) => any>;
    size: PropTypes.Requireable<string>;
    disabled: PropTypes.Requireable<boolean>;
    className: PropTypes.Requireable<string>;
    style: PropTypes.Requireable<object>;
  };
  static getDerivedStateFromProps(
    nextProps: SwitchProps,
    prevState: SwitchState,
  ): {
    derivedChecked: boolean;
  };
  constructor(props: SwitchProps);
  handleClick: React.MouseEventHandler;
  render(): JSX.Element;
}
export default Switch;
