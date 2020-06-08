import * as React from 'react';
import * as PropTypes from 'prop-types';
export interface SubMenuProps {
  uniqueKey?: string;
  selectedKey?: string;
  expandKeys?: string[];
  title: string | React.ReactNode;
  showArrow?: boolean;
  handleSelectedKey?: (key: string) => any;
  handleExpandKeys?: (key: string) => any;
  className?: string;
  style?: React.CSSProperties;
  mode?: 'vertical' | 'horizontal';
  theme?: 'light' | 'dark';
  itemGroup?: boolean;
}
export interface ChildProps {
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
declare class SubMenu extends React.Component<SubMenuProps> {
  static displayName: string;
  static defaultProps: {
    showArrow: boolean;
    itemGroup: boolean;
  };
  static propTypes: {
    uniqueKey: PropTypes.Requireable<string>;
    selectedKey: PropTypes.Requireable<string>;
    expandKeys: PropTypes.Requireable<string[]>;
    title: PropTypes.Requireable<string | PropTypes.ReactElementLike>;
    mode: PropTypes.Requireable<string>;
    theme: PropTypes.Requireable<string>;
    onSelectedChange: PropTypes.Requireable<(...args: any[]) => any>;
    onExpandChange: PropTypes.Requireable<(...args: any[]) => any>;
    className: PropTypes.Requireable<string>;
    style: PropTypes.Requireable<object>;
    showArrow: PropTypes.Requireable<boolean>;
    itemGroup: PropTypes.Requireable<boolean>;
  };
  state: {
    childrenVisible: boolean;
  };
  private childrenKeys;
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
  handleClick: React.ReactEventHandler;
  render(): JSX.Element;
}
export default SubMenu;
