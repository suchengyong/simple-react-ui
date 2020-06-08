import * as React from 'react';
import * as PropTypes from 'prop-types';
export interface ButtonProps {
  icon?: string;
  position?: 'left' | 'right';
  size?: 'small' | 'medium' | 'large';
  type?: 'default' | 'dashed' | 'primary' | 'danger';
  ghost?: boolean;
  htmlType?: 'button' | 'submit' | 'reset';
  loading?: boolean;
  onClick?: React.MouseEventHandler;
  disabled?: boolean;
  onMouseEnter?: React.MouseEventHandler;
  onMouseLeave?: React.MouseEventHandler;
  onFocus?: React.FocusEventHandler;
  onBlur?: React.FocusEventHandler;
  className?: string;
  style?: React.CSSProperties;
}
declare class Button extends React.Component<ButtonProps> {
  static displayName: string;
  static defaultProps: {
    position: string;
    size: string;
    type: string;
    ghost: boolean;
    htmlType: string;
    loading: boolean;
    disabled: boolean;
  };
  static propTypes: {
    icon: PropTypes.Requireable<string>;
    position: PropTypes.Requireable<string>;
    size: PropTypes.Requireable<string>;
    type: PropTypes.Requireable<string>;
    ghost: PropTypes.Requireable<boolean>;
    htmlType: PropTypes.Requireable<string>;
    loading: PropTypes.Requireable<boolean>;
    onClick: PropTypes.Requireable<(...args: any[]) => any>;
    disabled: PropTypes.Requireable<boolean>;
    className: PropTypes.Requireable<string>;
    style: PropTypes.Requireable<object>;
  };
  renderIcon: () => JSX.Element;
  render(): JSX.Element;
}
export default Button;
