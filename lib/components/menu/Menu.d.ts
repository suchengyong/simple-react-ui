import * as React from 'react';
import * as PropTypes from 'prop-types';
export interface MenuProps {
  selectedKey?: string;
  expandKeys?: string[];
  defaultSelectedKey?: string;
  defaultExpandKeys?: string[];
  mode?: 'vertical' | 'horizontal';
  theme?: 'light' | 'dark';
  onSelectedChange?: (key: string, expand: string[]) => any;
  onExpandChange?: (expand: string[]) => any;
  className?: string;
  style?: React.CSSProperties;
}
export interface MenuState {
  derivedSelectedKey: string;
  derivedExpandKeys: string[];
}
export interface ChildProps {
  uniqueKey?: string;
  selectedKey?: string;
  expandKeys?: string[];
  title: string | React.ReactNode;
  handleSelectedKey?: (key: string) => any;
  handleExpandKeys?: (key: string) => any;
  className?: string;
  style?: React.CSSProperties;
  mode?: 'vertical' | 'horizontal';
  theme?: 'light' | 'dark';
}
declare class Menu extends React.Component<MenuProps, MenuState> {
  static displayName: string;
  static defaultProps: {
    mode: string;
    theme: string;
  };
  static propTypes: {
    selectedKey: PropTypes.Requireable<string>;
    expandKeys: PropTypes.Requireable<string[]>;
    defaultSelectedKey: PropTypes.Requireable<string>;
    defaultExpandKeys: PropTypes.Requireable<string[]>;
    mode: PropTypes.Requireable<string>;
    theme: PropTypes.Requireable<string>;
    onSelectedChange: PropTypes.Requireable<(...args: any[]) => any>;
    onExpandChange: PropTypes.Requireable<(...args: any[]) => any>;
    className: PropTypes.Requireable<string>;
    style: PropTypes.Requireable<object>;
  };
  static getDerivedStateFromProps(
    nextProps: MenuProps,
    prevState: MenuState,
  ):
    | {
        derivedSelectedKey: string;
        derivedExpandKeys: string[];
      }
    | {
        derivedSelectedKey: string;
        derivedExpandKeys?: undefined;
      }
    | {
        derivedExpandKeys: string[];
        derivedSelectedKey?: undefined;
      };
  constructor(props: MenuProps);
  renderChildren: () => React.ReactElement<
    ChildProps,
    | string
    | ((
        props: any,
      ) => React.ReactElement<
        any,
        string | any | (new (props: any) => React.Component<any, any, any>)
      >)
    | (new (props: any) => React.Component<any, any, any>)
  >[];
  getUniqueKeyFromChild: (
    child: React.ReactElement<
      ChildProps,
      | string
      | ((
          props: any,
        ) => React.ReactElement<
          any,
          string | any | (new (props: any) => React.Component<any, any, any>)
        >)
      | (new (props: any) => React.Component<any, any, any>)
    >,
    index: number,
  ) => string;
  handleSelectedKey: (key: string) => void;
  handleExpandKeys: (key: string) => void;
  getNewExpandKeys: (key: string) => string[];
  render(): JSX.Element;
}
export default Menu;
