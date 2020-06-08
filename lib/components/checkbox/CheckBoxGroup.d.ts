import * as React from 'react';
import * as PropTypes from 'prop-types';
interface Option {
  value: string;
  label: string | React.ReactNode;
  disabled?: boolean;
}
export interface CheckBoxGroupProps {
  options: Option[];
  defaultValue?: string[];
  title?: string | React.ReactNode;
  value?: string[];
  onChange?: (value: string[]) => any;
  className?: string;
  style?: React.CSSProperties;
}
interface CheckBoxGroupState {
  derivedValue: string[];
}
declare class CheckBoxGroup extends React.Component<
  CheckBoxGroupProps,
  CheckBoxGroupState
> {
  static displayName: string;
  static defaultProps: {
    title: string;
  };
  static propTypes: {
    options: PropTypes.Validator<object[]>;
    defaultValue: PropTypes.Requireable<string[]>;
    title: PropTypes.Requireable<string | PropTypes.ReactElementLike>;
    value: PropTypes.Requireable<string[]>;
    onChange: PropTypes.Requireable<(...args: any[]) => any>;
    className: PropTypes.Requireable<string>;
    style: PropTypes.Requireable<object>;
  };
  static getDerivedStateFromProps(
    nextProps: CheckBoxGroupProps,
    prevState: CheckBoxGroupState,
  ): {
    derivedValue: string[];
  };
  constructor(props: CheckBoxGroupProps);
  handleChange: (key: string) => void;
  selectAll: (isAll: boolean) => void;
  getStatus: () => 'all' | 'none' | 'indeterminate';
  handleAll: () => void;
  render(): JSX.Element;
}
export default CheckBoxGroup;
