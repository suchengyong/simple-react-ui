import * as React from 'react';
import * as PropTypes from 'prop-types';
export interface TabPaneProps {
  title: string | React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
declare class TabPane extends React.Component<TabPaneProps> {
  static displayName: string;
  static defaultProps: {
    disabled: boolean;
  };
  static propTypes: {
    title: PropTypes.Validator<string | PropTypes.ReactElementLike>;
    active: PropTypes.Requireable<boolean>;
    className: PropTypes.Requireable<string>;
    style: PropTypes.Requireable<object>;
    disabled: PropTypes.Requireable<boolean>;
  };
  render(): JSX.Element;
}
export default TabPane;
