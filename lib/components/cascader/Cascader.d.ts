import * as React from 'react';
import * as PropTypes from 'prop-types';
export interface Option {
  value: string;
  label: string;
  children?: Option[];
  disabled?: boolean;
}
export interface CascaderProps {
  options: Option[];
  placeholder?: string;
  changeOnSelect?: boolean;
  itemClassName?: string;
  itemStyle?: React.CSSProperties;
  onChange?: (valueArr: string[], selectedOptions: Option[]) => any;
  onSelect?: (valueArr: string[], selectedOptions: Option[]) => any;
  className?: string;
  style?: React.CSSProperties;
}
export interface CascaderState {
  valueArr: string[];
  selectedOptions: Option[];
  inputValueFromLabel: string;
  menuVisible: boolean;
  menuStyle: React.CSSProperties;
}
declare class Cascader extends React.Component<CascaderProps, CascaderState> {
  static displayName: string;
  static defaultProps: {
    changeOnSelect: boolean;
  };
  static propTypes: {
    options: PropTypes.Validator<object[]>;
    placeholder: PropTypes.Requireable<string>;
    itemStyle: PropTypes.Requireable<object>;
    itemClassName: PropTypes.Requireable<string>;
    style: PropTypes.Requireable<object>;
    className: PropTypes.Requireable<string>;
    onChange: PropTypes.Requireable<(...args: any[]) => any>;
    onSelect: PropTypes.Requireable<(...args: any[]) => any>;
    changeOnSelect: PropTypes.Requireable<boolean>;
  };
  private cascaderEl;
  constructor(props: CascaderProps);
  componentDidMount(): void;
  componentWillUnmount(): void;
  handleClickDocument: EventListener;
  saveCascaderEl: (node: HTMLDivElement) => void;
  handleClickInput: () => void;
  handleChangeValue: (option: Option, level: number) => void;
  handleClickLastLevel: (option: Option, level: number) => void;
  handleClickMidLevel: (option: Option, level: number) => void;
  getLabelString: (selectedOptions: Option[]) => string;
  handleOnClear: () => void;
  render(): JSX.Element;
}
export default Cascader;
