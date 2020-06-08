import * as React from 'react';
import * as PropTypes from 'prop-types';
export interface TabsProps {
  activeKey?: string;
  defaultActiveKey?: string;
  onChange?: (key: string) => any;
  vertical?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
export interface TabsState {
  derivedActiveKey: string;
}
export interface TabPane {
  title: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
declare class Tabs extends React.Component<TabsProps, TabsState> {
  static displayName: string;
  static propTypes: {
    activeKey: PropTypes.Requireable<string>;
    defaultActiveKey: PropTypes.Requireable<string>;
    onChange: PropTypes.Requireable<(...args: any[]) => any>;
    className: PropTypes.Requireable<string>;
    style: PropTypes.Requireable<object>;
    vertical: PropTypes.Requireable<boolean>;
  };
  static getDerivedStateFromProps(
    nextProps: TabsProps,
    prevState: TabsState,
  ): {
    derivedActiveKey: string;
  };
  private headRef;
  private roleRef;
  private bodyRef;
  private keys;
  constructor(props: TabsProps);
  componentDidMount(): void;
  componentDidUpdate(prevProps: TabsProps, prevState: TabsState): void;
  getTitles: () => React.ReactNode[];
  getPanes: () => React.ReactNode[];
  handleClickTitle: (
    key: string,
    disabled: boolean,
    e: React.MouseEvent<Element, MouseEvent>,
  ) => void;
  locateUnderline: (key: string, node: HTMLLIElement) => void;
  saveHeadRef: (node: HTMLUListElement) => void;
  saveRoleRef: (node: HTMLLIElement) => void;
  saveBodyRef: (node: HTMLUListElement) => void;
  render(): JSX.Element;
}
export default Tabs;
