import * as React from 'react';
import * as PropTypes from 'prop-types';
export interface CollapseProps {
  activeKey?: string[];
  defaultActiveKey?: string[];
  accordion?: boolean;
  showArrow?: boolean;
  onChange?: (activeKey: string[], e: React.MouseEvent<HTMLElement>) => any;
  className?: string;
  style?: React.CSSProperties;
}
export interface CollapseState {
  derivedActiveKey: string[];
}
export interface PanelProps {
  header: string | React.ReactNode;
  uniqueKey?: string;
  disabled?: boolean;
  showArrow?: boolean;
  activeKey?: string[];
  derivedActiveKey?: string[];
  onClick?: (key: string, e: React.MouseEvent<HTMLElement>) => any;
  className?: string;
  style?: React.CSSProperties;
}
declare class Collapse extends React.Component<CollapseProps, CollapseState> {
  static displayName: string;
  static defaultProps: {
    accordion: boolean;
    showArrow: boolean;
  };
  static propTypes: {
    activeKey: PropTypes.Requireable<string | string[]>;
    defaultActiveKey: PropTypes.Requireable<string | string[]>;
    onChange: PropTypes.Requireable<(...args: any[]) => any>;
    style: PropTypes.Requireable<object>;
    className: PropTypes.Requireable<string>;
  };
  static getDerivedStateFromProps(
    nextProps: CollapseProps,
    prevState: CollapseState,
  ): {
    derivedActiveKey: string[];
  };
  constructor(props: CollapseProps);
  handleClickHeader: (
    key: string,
    e: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => void;
  renderChildren: () => any;
  render(): JSX.Element;
}
export default Collapse;
