import * as React from 'react';
import * as PropTypes from 'prop-types';
interface IWaveProps {
  closeWave?: boolean;
}
declare class Wave extends React.Component<IWaveProps> {
  static displayName: string;
  static defaultProps: {
    closeWave: boolean;
  };
  static propTypes: {
    closeWave: PropTypes.Requireable<boolean>;
  };
  private node;
  private animating;
  private originClassName;
  private animatingClassName;
  componentDidMount(): void;
  componentWillUnmount(): void;
  animationStart: () => void;
  animationEnd: () => void;
  render(): {};
}
export default Wave;
