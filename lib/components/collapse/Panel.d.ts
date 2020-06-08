import * as React from 'react';
import * as PropTypes from 'prop-types';
export interface PanelProps {
  header: string | React.ReactNode;
  uniqueKey?: string;
  disabled?: boolean;
  showArrow?: boolean;
  derivedActiveKey?: string[];
  onClick?: (key: string, e: React.MouseEvent<HTMLElement>) => any;
  style?: React.CSSProperties;
  className?: string;
}
declare class Panel extends React.Component<PanelProps> {
  static displayName: string;
  static propTypes: {
    header: PropTypes.Validator<string | PropTypes.ReactElementLike>;
    uniqueKey: PropTypes.Requireable<string>;
    derivedActiveKey: PropTypes.Requireable<string[]>;
    disabled: PropTypes.Requireable<boolean>;
    showArrow: PropTypes.Requireable<boolean>;
    onClick: PropTypes.Requireable<(...args: any[]) => any>;
    style: PropTypes.Requireable<object>;
    className: PropTypes.Requireable<string>;
  };
  handleClickHeader: React.MouseEventHandler<HTMLElement>;
  render(): JSX.Element;
}
export default Panel;
