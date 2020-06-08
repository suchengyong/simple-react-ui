import * as React from 'react';
import * as PropTypes from 'prop-types';
export interface StarProps {
  count: number;
  index: number;
  handleHover?: (index: number, position: 'left' | 'right') => any;
  handleClick?: (index: number, positon: 'left' | 'right') => any;
}
declare class Star extends React.Component<StarProps> {
  static displayName: string;
  static propTypes: {
    count: PropTypes.Requireable<number>;
    index: PropTypes.Requireable<number>;
    handleHover: PropTypes.Requireable<(...args: any[]) => any>;
    handleClick: PropTypes.Requireable<(...args: any[]) => any>;
  };
  getIconName: () => string;
  handleMouseEnter: (position: 'left' | 'right') => void;
  handleClick: (postion: 'left' | 'right') => void;
  render(): JSX.Element;
}
export default Star;
