import * as React from 'react';
import * as PropTypes from 'prop-types';
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
declare class Option extends React.Component<OptionProps> {
  static displayName: string;
  static defaultProps: {
    disabled: boolean;
    vertical: boolean;
  };
  static propTypes: {
    value: PropTypes.Validator<any>;
    checkedValue: PropTypes.Requireable<any>;
    onClick: PropTypes.Requireable<(...args: any[]) => any>;
    radioStyle: PropTypes.Requireable<string>;
    disabled: PropTypes.Requireable<boolean>;
    vertical: PropTypes.Requireable<boolean>;
  };
  handleClick: React.MouseEventHandler;
  render(): JSX.Element;
}
export default Option;
