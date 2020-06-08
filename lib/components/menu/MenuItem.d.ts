import * as React from 'react';
import * as PropTypes from 'prop-types';
export interface MenuItemProps {
  uniqueKey?: string;
  selectedKey?: string;
  expandKeys?: string[];
  handleSelectedKey?: (key: string) => any;
  handleExpandKeys?: (key: string) => any;
  className?: string;
  style?: React.CSSProperties;
  mode?: 'vertical' | 'horizontal';
  theme?: 'light' | 'dark';
}
declare class MenuItem extends React.Component<MenuItemProps> {
  static displayName: string;
  static propTypes: {
    uniqueKey: PropTypes.Requireable<string>;
    selectedKey: PropTypes.Requireable<string>;
    expandKeys: PropTypes.Requireable<string[]>;
    mode: PropTypes.Requireable<string>;
    theme: PropTypes.Requireable<string>;
    onSelectedChange: PropTypes.Requireable<(...args: any[]) => any>;
    onExpandChange: PropTypes.Requireable<(...args: any[]) => any>;
    className: PropTypes.Requireable<string>;
    style: PropTypes.Requireable<object>;
  };
  render(): JSX.Element;
}
export default MenuItem;
