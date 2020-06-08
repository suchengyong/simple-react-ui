import * as React from 'react';
import * as PropTypes from 'prop-types';
export interface Option {
  value: string;
  label: string;
  children?: Option[];
  disabled?: boolean;
}
export interface CascaderMenuProps {
  options: Option[];
  level: number;
  handleChangeValue: (option: Option, level: number) => any;
  valueArr: string[];
  itemClassName?: string;
  itemStyle?: React.CSSProperties;
}
export interface CascaderMenuState {
  currentOption: Option | null;
}
declare class CascaderMenu extends React.Component<
  CascaderMenuProps,
  CascaderMenuState
> {
  static displayName: string;
  static propTypes: {
    options: PropTypes.Requireable<object[]>;
    level: PropTypes.Requireable<number>;
    handleChangeValue: PropTypes.Requireable<(...args: any[]) => any>;
    valueArr: PropTypes.Requireable<string[]>;
    itemClassName: PropTypes.Requireable<string>;
    itemStyle: PropTypes.Requireable<object>;
  };
  static getDerivedStateFromProps(
    nextProps: CascaderMenuProps,
    prevState: CascaderMenuState,
  ): {
    currentOption: any;
  };
  constructor(props: CascaderMenuProps);
  handleClickItem: (option: Option) => void;
  render(): JSX.Element;
}
export default CascaderMenu;
