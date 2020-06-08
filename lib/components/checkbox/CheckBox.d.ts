import * as React from 'react';
import * as PropTypes from 'prop-types';
export interface CheckBoxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  onChange?: (checked: boolean, e: React.MouseEvent) => any;
}
interface CheckBoxState {
  derivedChecked: boolean;
}
declare class CheckBox extends React.Component<CheckBoxProps, CheckBoxState> {
  static displayName: string;
  static propTypes: {
    checked: PropTypes.Requireable<boolean>;
    defaultChecked: PropTypes.Requireable<boolean>;
    disabled: PropTypes.Requireable<boolean>;
    indeterminate: PropTypes.Requireable<boolean>;
    onChange: PropTypes.Requireable<(...args: any[]) => any>;
  };
  static getDerivedStateFromProps(
    nextProps: CheckBoxProps,
    prevState: CheckBoxState,
  ): {
    derivedChecked: boolean;
  };
  constructor(props: CheckBoxProps);
  handleClick: (e: React.MouseEvent<Element, MouseEvent>) => void;
  render(): JSX.Element;
}
export default CheckBox;
