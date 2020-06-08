import * as React from 'react';
import * as PropTypes from 'prop-types';
export interface ButtonGroupProps {
  className?: string;
  style?: React.CSSProperties;
}
declare class ButtonGroup extends React.Component<ButtonGroupProps> {
  static displayName: string;
  static propTypes: {
    className: PropTypes.Requireable<string>;
    style: PropTypes.Requireable<object>;
  };
  render(): JSX.Element;
}
export default ButtonGroup;
