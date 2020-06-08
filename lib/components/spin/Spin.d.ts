import * as React from 'react';
import * as PropTypes from 'prop-types';
export interface SpinProps {
  spinning?: boolean;
  size?: number;
  tip?: string;
  className?: string;
  style?: React.CSSProperties;
}
declare class Spin extends React.Component<SpinProps> {
  static displayName: string;
  static defaultProps: {
    spinning: boolean;
    size: number;
  };
  static propTypes: {
    spinning: PropTypes.Requireable<boolean>;
    size: PropTypes.Requireable<number>;
    tip: PropTypes.Requireable<string>;
    className: PropTypes.Requireable<string>;
    style: PropTypes.Requireable<object>;
  };
  render(): JSX.Element;
}
export default Spin;
