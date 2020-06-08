import * as React from 'react';
import * as PropTypes from 'prop-types';
export interface InputProps {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler;
  onKeyDown?: React.KeyboardEventHandler;
  onPressEnter?: React.KeyboardEventHandler;
  onFocus?: React.FocusEventHandler;
  onBlur?: React.FocusEventHandler;
  addonBefore?: string | React.ReactNode;
  addonAfter?: string | React.ReactNode;
  prefix?: string | React.ReactNode;
  suffix?: string | React.ReactNode;
  disabled?: boolean;
  error?: boolean;
  readonly?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
export interface InputState {
  derivedValue: string;
}
declare class Input extends React.Component<InputProps, InputState> {
  static displayName: string;
  static defaultProps: {
    disabled: boolean;
    error: boolean;
    readonly: boolean;
  };
  static propTypes: {
    value: PropTypes.Requireable<string>;
    defaultValue: PropTypes.Requireable<string>;
    placeholder: PropTypes.Requireable<string>;
    style: PropTypes.Requireable<object>;
    className: PropTypes.Requireable<string>;
    onChange: PropTypes.Requireable<(...args: any[]) => any>;
    onKeyDown: PropTypes.Requireable<(...args: any[]) => any>;
    onPressEnter: PropTypes.Requireable<(...args: any[]) => any>;
    onFocus: PropTypes.Requireable<(...args: any[]) => any>;
    onBlur: PropTypes.Requireable<(...args: any[]) => any>;
    addonBefore: PropTypes.Requireable<string | PropTypes.ReactElementLike>;
    addonAfter: PropTypes.Requireable<string | PropTypes.ReactElementLike>;
    prefix: PropTypes.Requireable<string | PropTypes.ReactElementLike>;
    suffix: PropTypes.Requireable<string | PropTypes.ReactElementLike>;
    disabled: PropTypes.Requireable<boolean>;
    error: PropTypes.Requireable<boolean>;
    readonly: PropTypes.Requireable<boolean>;
  };
  static getDerivedStateFromProps(
    nextProps: InputProps,
    prevState: InputState,
  ): {
    derivedValue: string;
  };
  private inputRef;
  constructor(props: InputProps);
  handleChange: React.ChangeEventHandler<any>;
  handleKeyDown: React.KeyboardEventHandler<any>;
  saveInputRef: (node: any) => void;
  focus: () => void;
  blur: () => void;
  render(): JSX.Element;
}
export default Input;
