import * as React from 'react';
import * as PropTypes from 'prop-types';
export interface AffixProps {
  distance?: number;
  className?: string;
  style?: React.CSSProperties;
}
declare class Affix extends React.Component<AffixProps> {
  static displayName: string;
  static defaultProps: {
    distance: number;
  };
  static propTypes: {
    distance: PropTypes.Requireable<number>;
    className: PropTypes.Requireable<string>;
    style: PropTypes.Requireable<object>;
  };
  private top;
  private wrapperRef;
  private affixRef;
  componentDidMount(): void;
  componentWillUnmount(): void;
  setTop: () => void;
  handleScroll: () => void;
  saveAffixRef: (node: HTMLDivElement) => void;
  saveWrapperRef: (node: HTMLDivElement) => void;
  render(): JSX.Element;
}
export default Affix;
