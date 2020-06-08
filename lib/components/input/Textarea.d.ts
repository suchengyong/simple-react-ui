import * as React from 'react';
import * as PropTypes from 'prop-types';
export interface Size {
  rows: number | string;
  cols: number | string;
}
export interface TextareaProps {
  size?: Size;
  autosize?: boolean;
  value?: string;
  defaultValue?: string;
  onPressEnter?: React.KeyboardEventHandler;
  onChange?: React.ChangeEventHandler;
  className?: string;
  style?: React.CSSProperties;
  placeholder?: string;
}
export interface TextareaState {
  derivedValue: string;
}
declare class Textarea extends React.Component<TextareaProps, TextareaState> {
  static displayName: string;
  static defaultProps: {
    autosize: boolean;
    placeholder: string;
  };
  static propTypes: {
    size: PropTypes.Requireable<object>;
    autosize: PropTypes.Requireable<boolean>;
    value: PropTypes.Requireable<string>;
    defaultValue: PropTypes.Requireable<string>;
    onPressEnter: PropTypes.Requireable<(...args: any[]) => any>;
    onChange: PropTypes.Requireable<(...args: any[]) => any>;
    style: PropTypes.Requireable<object>;
    placeholder: PropTypes.Requireable<string>;
  };
  static getDerivedStateFromProps(
    nextProps: TextareaProps,
    prevState: TextareaState,
  ): {
    derivedValue: string;
  };
  private textareaRef;
  private originHeight;
  constructor(props: TextareaProps);
  componentDidMount(): void;
  handleChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  handleKeyDown: React.KeyboardEventHandler;
  getTextareaRef: (textarea: HTMLTextAreaElement) => void;
  focus: () => void;
  blur: () => void;
  render(): JSX.Element;
}
export default Textarea;
